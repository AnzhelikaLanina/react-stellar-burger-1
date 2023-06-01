import React from "react";
import styles from "./burger-ingredients.module.css";
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientList from "../ingredient-list/ingredient-list";
import PropTypes from "prop-types";
import {ingredientPropType} from "../../utils/prop-types";

const BurgerIngredients = ({data, openIngredientDetails}) =>{
    const [current, setCurrent] = React.useState('one');

    const buns = data.filter((element) => element.type === "bun");
    const mains = data.filter((element) => element.type === "main");
    const sauces = data.filter((element) => element.type === "sauce");

    return (
        <section className={styles.section}>
            <h1 className="text text_type_main-large">Соберите бургер</h1>
            <div className={styles.tabs}>
                <Tab value="one" active={current === 'one'} onClick={setCurrent} >Булки</Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent} >Соусы</Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent} >Начинки</Tab>
            </div>
            <ul className={`custom-scroll ${styles.subsections}`}>
                <IngredientList name={'Булки'} data={buns} openIngredientDetails={openIngredientDetails} />
                <IngredientList name={"Соусы"} data={sauces} openIngredientDetails={openIngredientDetails}  />
                <IngredientList name={"Начинки"} data={mains} openIngredientDetails={openIngredientDetails}  />
            </ul>
        </section>
    )
}

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(ingredientPropType),
    openIngredientDetails: PropTypes.func.isRequired
}

export default BurgerIngredients;