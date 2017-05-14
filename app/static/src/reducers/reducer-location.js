import USER_COOKIE from '../consts';
import {FETCH_LOCATION_SUCCESS, FETCH_LOCATION_FAILURE} from '../actions';

const INITIAL_STATE = {};

export default function(state=INITIAL_STATE, action) {
    switch(action.type){
        case FETCH_LOCATION_SUCCESS:
            return {
                ...state, 
                location: action.payload,
                error: '',
                customerId: localStorage.getItem(USER_COOKIE)
            };
        case FETCH_LOCATION_FAILURE:
            return {
                ...state, 
                location: '',
                customerId: '',
                error: action.payload
            };
        default:
            return state;
    }
}