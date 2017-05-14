import _ from 'lodash';
import {
    FETCH_PRODUCTS_SUCCESS
} from '../actions';

const INITIAL_STATE = {};

export default function(state=INITIAL_STATE, action) {
    switch(action.type){
        case FETCH_PRODUCTS_SUCCESS:
            const products = action.payload;
            return {
                ...state, 
                sports: _.filter(products, {category: 'Sports'}),
                news: _.filter(products, {category: 'News'})
            };
        default:
            return state;
    }
}