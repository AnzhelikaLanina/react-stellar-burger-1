import React from "react";
import styles from "./app.module.css";
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { BurgerIngredientContext} from '../../services/burgerConstructorContext';
import {getIngredients, postOrder} from "../../utils/burger-api";

const App = () => {
    const [ingredients, setIngredients] = React.useState([]);
    const [ingredientDetails, setIngredientDetails] = React.useState(null);
    const [orderNumber, setOrderNumber] = React.useState(null);

    React.useEffect(() => {
        getIngredients()
            .then((res) => {
                setIngredients(res.data);
            })
            .catch((err) => console.log(err));
    }, [])

    const openModal = (id) => {
        if (ingredients) {
            setIngredientDetails(ingredients.find((element) => element._id === id));
        }
    }

    const closeModal = () => {
        setIngredientDetails(null);
        setOrderNumber(null);
    };

    const makeOrder = (data) => {
        postOrder(data)
            .then((res) => {
                setOrderNumber(res.order.number);
            })
            .catch((err) => console.log(err));
    }

  return (
    <div className={styles.app}>
        <AppHeader />
        <main className={styles.main}>
            <BurgerIngredientContext.Provider value={{ ingredients, setIngredients }}>
                <BurgerIngredients openModal={openModal} />
                <BurgerConstructor makeOrder={makeOrder} />
            </BurgerIngredientContext.Provider>
        </main>
        {orderNumber &&
            <Modal
                closeModal={closeModal}>
                <OrderDetails orderNumber={orderNumber} closeModal={closeModal} />
            </Modal>}

        {ingredientDetails &&
            <Modal
                closeModal={closeModal}>
                <IngredientDetails ingredient={ingredientDetails} closeModal={closeModal} />
            </Modal>}
    </div>
  );
}

export default App;
