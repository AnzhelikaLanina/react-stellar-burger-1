import styles from "./ingredient-details-main.module.css";
import {useSelector} from "react-redux";

const IngredientDetailsMain = () => {
    const { image_large, name, calories, carbohydrates, fat, proteins } = useSelector(store => store.ingredients.ingredientSelected);

    return (
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
    );
}

export default IngredientDetailsMain;