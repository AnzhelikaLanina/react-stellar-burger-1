import React from "react";
import {ConstructorElement, Button, CurrencyIcon, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';
import PropTypes from "prop-types";
import {ingredientPropType} from '../../utils/prop-types';
const BurgerConstructor = ({data, openOrderDetails}) => {
    const ingredients = data.filter((element) => element.type !== "bun");

    return(
        <section className={styles.main}>
            <div className={styles.container}>
                {data[0] &&
                            <div className={styles.lockIngredient}>
                                <ConstructorElement
                                    type="top"
                                    isLocked={true}
                                    text={`${data[0].name} (верх)`}
                                    price={data[0].price}
                                    thumbnail={data[0].image}
                                />
                            </div>
                }
                <div className={`custom-scroll ${styles.box}`}>
                    {ingredients.map((element) => (
                        <div key={element._id} className={styles.card}>
                            <DragIcon type="primary" />
                            <ConstructorElement
                                text={element.name}
                                price={element.price}
                                thumbnail={element.image}
                            />
                        </div>
                    ))}
                </div>
                {data[0] &&
                            <div className={styles.lockIngredient}>
                                <ConstructorElement
                                    type="bottom"
                                    isLocked={true}
                                    text={`${data[0].name} (низ)`}
                                    price={data[0].price}
                                    thumbnail={data[0].image}
                                />
                            </div>


                }
            </div>
            <div className={styles.element}>
                <div className={styles.caption}>
                    <p className="text text_type_digits-medium">610</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button htmlType="submit" type="primary" size="large" onClick={openOrderDetails}>
                    Оформить заказ
                </Button>
            </div>
        </section>
    )
}

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(ingredientPropType),
    openOrderDetails: PropTypes.func.isRequired
}


export default BurgerConstructor;