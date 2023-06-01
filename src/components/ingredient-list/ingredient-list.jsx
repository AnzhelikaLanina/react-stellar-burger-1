import React from "react";
import styles from "./ingredient-list.module.css";
import Ingredient from "../ingredient/ingredient";
import {ingredientPropType} from "../../utils/prop-types";
import PropTypes from "prop-types";

const IngredientList = ({data, name, openIngredientDetails}) =>{

    return (
        <li className={styles.subsection}>
            <p className="text text_type_main-medium">{name}</p>
            <ul className={styles.elements}>
                {data.map((element) => {
                    return (
                        <Ingredient
                            key={element._id}
                            ingredientDetails={element}
                            openIngredientDetails={openIngredientDetails}
                        />
                    )
                })}
            </ul>
        </li>
    )
}

IngredientList.propTypes = {
    data: PropTypes.arrayOf(ingredientPropType),
    name: PropTypes.string.isRequired,
    openIngredientDetails: PropTypes.func.isRequired
}

export default IngredientList;