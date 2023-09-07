import React from "react";
import IngredientDetailsMain from "../../components/ingredient-details-main/ingredient-details-main";
const InfoIngredientPage = () => {

    return (
        <div >
            <main >
                <h2 className="text text_type_main-large">Детали ингредиента</h2>
                <IngredientDetailsMain />
            </main>
        </div>
    );
}

export default InfoIngredientPage;