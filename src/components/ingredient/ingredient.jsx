import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from "./ingredient.module.css";
import React from "react";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import {useDrag} from "react-dnd";
import {ingredientPropType} from "../../utils/prop-types";

const Ingredient = ({ingredient, onClick}) =>{
    const { image, name, price } = ingredient;
    const { ingredientsBurgerConstructor } = useSelector(store => store.constructor);

    const [, dragRef] = useDrag({
        type: "ingredients",
        item: ingredient,
        collect: (monitor) => ({
            isDrag: monitor.isDragging(),
        }),
    });

    const count = ingredientsBurgerConstructor?.filter((item) => item._id === ingredientsBurgerConstructor._id).length;

    return (
        <li className={styles.element} onClick={onClick} ref={dragRef} >
            {count > 0 && <Counter count={count} size="default" extraClass="m-1"/>}
            <img src={image} alt={name}/>
            <div className={styles.price}>
                <p className="text text_type_digits-default">{price}</p>
                <CurrencyIcon type="primary"/>
            </div>
            <p className="text text_type_main-small">{name}</p>
        </li>
    )
}

Ingredient.propTypes = {
    ingredient: ingredientPropType.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Ingredient;