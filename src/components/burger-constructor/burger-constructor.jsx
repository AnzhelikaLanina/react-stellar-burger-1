import React,  { useContext, useReducer } from "react";
import {ConstructorElement, Button, CurrencyIcon, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';
import { BurgerIngredientContext} from '../../services/burgerConstructorContext';
import {postOrder} from "../../utils/burger-api";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

const initialState = { totalPrice: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case "set":
            return { totalPrice: action.payload };
        case "reset":
            return initialState;
        default:
            throw new Error(`Wrong type of action: ${action.type}`);
    }
}

const BurgerConstructor = () => {
    const [orderNumber, setOrderNumber] = React.useState(null);
    const { ingredients } = useContext( BurgerIngredientContext);
    const [state, dispatch] = useReducer(reducer,initialState, undefined);

    const buns = ingredients.find(element => element.type === 'bun');
    const otherIngredients = ingredients.filter(element => element.type !== 'bun');
    const totalPrice = buns && otherIngredients.reduce((sum, element) => sum + element.price, 0) + buns.price * 2;

    const makeOrder = (data) => {
        postOrder(data)
            .then((res) => {
                setOrderNumber(res.order.number);
            })
            .catch((err) => console.log(err));
    }

    React.useEffect(() => {
        if (ingredients) {
            return dispatch({ type: "set", payload: totalPrice });
        } else {
            return dispatch({ type: "reset" });
        }
    }, [totalPrice, ingredients])

    const handleOrder = () => {
        makeOrder(ingredients);
    }

    const closeModal = () => {
        setOrderNumber(null);
    };

    return(
        <>
        <section className={styles.main}>
            <div className={styles.container}>
                {buns &&
                            <div className={styles.lockIngredient}>
                                <ConstructorElement
                                    type="top"
                                    isLocked={true}
                                    text={`${buns.name} (верх)`}
                                    price={buns.price}
                                    thumbnail={buns.image}
                                />
                            </div>
                }
                <div className={`custom-scroll ${styles.box}`}>
                    {otherIngredients.map((element,id) => (
                        <div key={id} className={styles.card}>
                            <DragIcon type="primary" />
                            <ConstructorElement
                                text={element.name}
                                price={element.price}
                                thumbnail={element.image}
                            />
                        </div>
                    ))}
                </div>
                {buns &&
                            <div className={styles.lockIngredient}>
                                <ConstructorElement
                                    type="bottom"
                                    isLocked={true}
                                    text={`${buns.name} (низ)`}
                                    price={buns.price}
                                    thumbnail={buns.image}
                                />
                            </div>


                }
            </div>
            <div className={styles.element}>
                <div className={styles.caption}>
                    <p className="text text_type_digits-medium">{state.totalPrice}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button htmlType="submit" type="primary" size="large" onClick={handleOrder}>
                    Оформить заказ
                </Button>
            </div>
        </section>
            {orderNumber &&
                <Modal
                    closeModal={closeModal}>
                    <OrderDetails orderNumber={orderNumber} closeModal={closeModal} />
                </Modal>}
        </>
    )
}

export default BurgerConstructor;