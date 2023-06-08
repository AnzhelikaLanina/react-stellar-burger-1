import React from "react";
import styles from "./app.module.css";
import {serverData} from '../../utils/constants';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";

const App = () => {
    const [state, setState] = React.useState({
        dataIngredients: [],
        isLoading: false,
        hasError: false,
    });

    const [orderDetails, setOrderDetails] = React.useState({ isOpened: false });
    const [ingredientDetails, setIngredientDetails] = React.useState({ isOpened: false, ingredient: null });

    React.useEffect(() => {
        const getBurgerIngredientsData = async () => {
            try {
                setState({...state, isLoading: true, hasError: false});
                const res = await fetch(serverData);
                if (res.ok){
                    const data = await res.json();
                    setState({...state, dataIngredients: data.data});
                }
            } catch (err) {
                console.log("Ошибка");
                setState({...state, isLoading: false, hasError: true});
            }
        };
        getBurgerIngredientsData();
    }, [])

    const openIngredientDetails = (ingredient) => {
        setIngredientDetails({ isOpened: true, ingredient: ingredient })
    }

    const openOrderDetails = () => {
        setOrderDetails({ ...orderDetails, isOpened: true });
    }

    const closeModal = () => {
        setOrderDetails({ ...orderDetails, isOpened: false });
        setIngredientDetails({ ...ingredientDetails, isOpened: false });
    }

  return (
    <div className={styles.app}>
        <AppHeader />
        <main className={styles.main}>
            <BurgerIngredients data={state.dataIngredients} openIngredientDetails={openIngredientDetails} />
            <BurgerConstructor data={state.dataIngredients} openOrderDetails={openOrderDetails} />
        </main>
        {orderDetails.isOpened &&
            <Modal
                closeModal={closeModal}>
                <OrderDetails orderNumber={`034536`} closeModal={closeModal} />
            </Modal>}

        {ingredientDetails.isOpened &&
            <Modal
                closeModal={closeModal}>
                <IngredientDetails ingredient={ingredientDetails.ingredient} closeModal={closeModal} />
            </Modal>}
    </div>
  );
}

export default App;
