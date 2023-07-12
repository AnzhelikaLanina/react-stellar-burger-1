import React from "react";
import styles from "./burger-ingredients.module.css";
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientList from "../ingredient-list/ingredient-list";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { useSelector, useDispatch } from 'react-redux';
import {closeModalIngredientDetails} from "../../services/actions/ingredient";

const BurgerIngredients = () =>{
    const [currentTab, setCurrentTab] = React.useState("bun");
    const dispatch = useDispatch();
    const { ingredients, ingredientSelected } = useSelector(store => store.ingredients);

    const buns = React.useMemo(
        () =>
            ingredients.filter((element) => element.type === "bun"),
        [ingredients]
    );

    const mains = React.useMemo(
        () =>
            ingredients.filter((element) => element.type === "main"),
        [ingredients]
    );

    const sauces = React.useMemo(
        () =>
            ingredients.filter((element) => element.type === "sauce"),
        [ingredients]
    );
    const closeModalIngredient = () => {
        dispatch(closeModalIngredientDetails());
    };

    const bunRef = React.useRef();
    const sauceRef = React.useRef();
    const mainRef = React.useRef();

    const handleChangeTab = (e) => {
        const containerTop = e.target.getBoundingClientRect().top;
        const bunTop = bunRef.current.getBoundingClientRect().top;
        const sauceTop = sauceRef.current.getBoundingClientRect().top;
        const mainTop = mainRef.current.getBoundingClientRect().top;

        const offset = {
            "bun": Math.abs(bunTop - containerTop),
            "sauce": Math.abs(sauceTop - containerTop),
            "main": Math.abs(mainTop - containerTop)
        };

        const activeTab = Object.keys(offset).reduce((prev, current) => offset[prev] < offset[current] ? prev : current);

        if (currentTab !== activeTab) {
            setCurrentTab(activeTab);
        }
    }

    const clickActiveTab = (target) => {
        setCurrentTab(target);
        switch(target) {
            case "bun": {
                bunRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            }
            case "sauce": {
                sauceRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            }
            case "main": {
                mainRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            }
            default:
                break;
        }
    }

    return (
        <>
        <section className={styles.section}>
            <h1 className="text text_type_main-large">Соберите бургер</h1>
            <div className={styles.tabs}>
                <Tab value="bun" active={currentTab === 'bun'} onClick={clickActiveTab} >Булки</Tab>
                <Tab value="sauce" active={currentTab === 'sauce'} onClick={clickActiveTab} >Соусы</Tab>
                <Tab value="main" active={currentTab === 'main'} onClick={clickActiveTab} >Начинки</Tab>
            </div>
            <ul className={`custom-scroll ${styles.subsections}`} onScroll={handleChangeTab}>
                <IngredientList name={'Булки'} ingredients={buns} ref={bunRef} />
                <IngredientList name={"Соусы"} ingredients={sauces} ref={sauceRef} />
                <IngredientList name={"Начинки"} ingredients={mains} ref={mainRef} />
            </ul>
        </section>
            {ingredientSelected &&
                <Modal
                    closeModal={closeModalIngredient}>
                    <IngredientDetails closeModal={closeModalIngredient} />
                </Modal>}
            </>
    )
}

export default BurgerIngredients;