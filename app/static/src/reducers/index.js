import { combineReducers } from 'redux';
import ProductsReducer from './reducer-products';
import LocationReducer from './reducer-location';
import BasketReducer from './reducer-basket';

const rootReducer = combineReducers({
    products: ProductsReducer,
    basketItems: BasketReducer,
    location: LocationReducer
});

export default rootReducer;