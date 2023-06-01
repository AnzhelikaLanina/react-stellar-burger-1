import styles from "./ingredient-details.module.css";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {ingredientPropType} from "../../utils/prop-types";

const IngredientDetails = ({ ingredient, closeModal }) => {
    const { image_large, name, calories, carbohydrates, fat, proteins } = ingredient;
    return (
        <div className={styles.main}>
            <div className={styles.block}>
                <h2 className="text text_type_main-large">Детали ингредиента</h2>
                <button className={styles.button} onClick={closeModal} type={"button"}>
                    <CloseIcon type="primary" />
                </button>
            </div>
            <div className={styles.card}>
                <img src={image_large} alt={name}/>
                <p className="text text_type_main-medium">{name}</p>
                <ul className={styles.container}>
                    <li className="text text_type_main-default text_color_inactive">Калории,ккал</li>
                    <li className="text text_type_main-default text_color_inactive">Белки, г</li>
                    <li className="text text_type_main-default text_color_inactive">Жиры, г</li>
                    <li className="text text_type_main-default text_color_inactive">Углеводы, г</li>
                    <li className="text text_type_main-default text_color_inactive">{calories}</li>
                    <li className="text text_type_main-default text_color_inactive">{proteins}</li>
                    <li className="text text_type_main-default text_color_inactive">{fat}</li>
                    <li className="text text_type_main-default text_color_inactive">{carbohydrates}</li>
                </ul>
            </div>
        </div>
    );
}

IngredientDetails.propTypes = {
    ingredient: ingredientPropType.isRequired,
    closeModal: PropTypes.func.isRequired
}
export default IngredientDetails;