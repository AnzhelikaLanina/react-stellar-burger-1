import { combineReducers } from 'redux';
import { ingredientReducer } from './ingredient-reducer';
import { orderReducer } from './order-reducer';
import { constructorReducer } from './constructor-reducer';

export const rootReducer = combineReducers({
    ingredients: ingredientReducer,
    order: orderReducer,
    constructor: constructorReducer
});