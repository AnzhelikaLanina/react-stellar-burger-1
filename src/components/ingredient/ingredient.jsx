import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from "./ingredient.module.css";
import React from "react";
import PropTypes from "prop-types";

const Ingredient = ({ingredientDetails, openModal, id}) =>{

    return (
        <li className={styles.element} onClick={(e) => openModal(e.currentTarget.id)} id={id} >
            <Counter count={1} size="default" extraClass="m-1"/>
            <img src={ingredientDetails.image} alt={ingredientDetails.name}/>
            <div className={styles.price}>
                <p className="text text_type_digits-default">{ingredientDetails.price}</p>
                <CurrencyIcon type="primary"/>
            </div>
            <p className="text text_type_main-small">{ingredientDetails.name}</p>
        </li>
    )
}

Ingredient.propTypes = {
    ingredientDetails: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    openModal: PropTypes.func.isRequired
}

export default Ingredient;