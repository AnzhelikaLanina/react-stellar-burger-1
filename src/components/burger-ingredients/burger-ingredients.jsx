import React from "react";
import styles from "./burger-ingredients.module.css";
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientList from "../ingredient-list/ingredient-list";
import {BurgerIngredientContext} from "../../services/burgerConstructorContext";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

const BurgerIngredients = () =>{
    const [current, setCurrent] = React.useState("bun");
    const [ingredientDetails, setIngredientDetails] = React.useState(null);
    const { ingredients } = React.useContext(BurgerIngredientContext);

    const buns = ingredients.filter((element) => element.type === "bun");
    const mains = ingredients.filter((element) => element.type === "main");
    const sauces = ingredients.filter((element) => element.type === "sauce");

    const openModal = (id) => {
        if (ingredients) {
            setIngredientDetails(ingredients.find((element) => element._id === id));
        }
    }

    const closeModal = () => {
        setIngredientDetails(null);
    };

    return (
        <>
        <section className={styles.section}>
            <h1 className="text text_type_main-large">Соберите бургер</h1>
            <div className={styles.tabs}>
                <Tab value="bun" active={current === 'bun'} onClick={setCurrent} >Булки</Tab>
                <Tab value="main" active={current === 'main'} onClick={setCurrent} >Соусы</Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent} >Начинки</Tab>
            </div>
            <ul className={`custom-scroll ${styles.subsections}`}>
                <IngredientList name={'Булки'} ingredients={buns} openModal={openModal} />
                <IngredientList name={"Соусы"} ingredients={sauces} openModal={openModal}  />
                <IngredientList name={"Начинки"} ingredients={mains} openModal={openModal}  />
            </ul>
        </section>
            {ingredientDetails &&
                <Modal
                    closeModal={closeModal}>
                    <IngredientDetails ingredient={ingredientDetails} closeModal={closeModal} />
                </Modal>}
            </>
    )
}

export default BurgerIngredients;