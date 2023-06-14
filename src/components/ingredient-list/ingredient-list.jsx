import React from "react";
import styles from "./ingredient-list.module.css";
import Ingredient from "../ingredient/ingredient";
import {ingredientPropType} from "../../utils/prop-types";
import PropTypes from "prop-types";

const IngredientList = ({ingredients, name, openModal}) =>{

    return (
        <li className={styles.subsection}>
            <p className="text text_type_main-medium">{name}</p>
            <ul className={styles.elements}>
                {ingredients.map((element) => {
                    return (
                        <Ingredient
                            key={element._id}
                            ingredientDetails={element}
                            openModal={openModal}
                            id={element._id}
                        />
                    )
                })}
            </ul>
        </li>
    )
}

IngredientList.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientPropType).isRequired,
    name: PropTypes.string.isRequired,
    openModal: PropTypes.func.isRequired
}

export default IngredientList;