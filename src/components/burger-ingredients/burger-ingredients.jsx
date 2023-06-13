import React from "react";
import styles from "./burger-ingredients.module.css";
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientList from "../ingredient-list/ingredient-list";
import PropTypes from "prop-types";
import {BurgerIngredientContext} from "../../services/burgerConstructorContext";

const BurgerIngredients = ({openModal}) =>{
    const [current, setCurrent] = React.useState("bun");
    const { ingredients } = React.useContext(BurgerIngredientContext);

    const buns = ingredients.filter((element) => element.type === "bun");
    const mains = ingredients.filter((element) => element.type === "main");
    const sauces = ingredients.filter((element) => element.type === "sauce");

    return (
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
    )
}

BurgerIngredients.propTypes = {
    openModal: PropTypes.func.isRequired,
}

export default BurgerIngredients;