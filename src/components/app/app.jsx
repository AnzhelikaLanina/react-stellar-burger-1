import React from "react";
import styles from "./app.module.css";
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { BurgerIngredientContext} from '../../services/burgerConstructorContext';
import {getIngredients} from "../../utils/burger-api";

const App = () => {
    const [ingredients, setIngredients] = React.useState([]);

    React.useEffect(() => {
        getIngredients()
            .then((res) => {
                setIngredients(res.data);
            })
            .catch((err) => console.log(err));
    }, [])

  return (
    <div className={styles.app}>
        <AppHeader />
        <main className={styles.main}>
            <BurgerIngredientContext.Provider value={{ ingredients, setIngredients }}>
                <BurgerIngredients />
                <BurgerConstructor />
            </BurgerIngredientContext.Provider>
        </main>
    </div>
  );
}

export default App;
