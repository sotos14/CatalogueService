import _ from 'lodash';
import {
    PRODUCT_SELECTED,
    PRODUCT_REMOVED
} from '../actions';

const INITIAL_STATE = {};

export default function(state=INITIAL_STATE, action) {
    switch(action.type){
        case PRODUCT_SELECTED:
            return {
                ...state, 
                [action.payload.id]: action.payload
            };
        case PRODUCT_REMOVED:
            return _.omit(state, [action.payload]);
        default:
            return state;
    }
}