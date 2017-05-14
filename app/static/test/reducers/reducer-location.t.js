import LocationReducer from '../../src/reducers/reducer-location';
import { FETCH_LOCATION_SUCCESS, FETCH_LOCATION_FAILURE } from '../../src/actions';
import USER_COOKIE from '../../src/consts';

describe('Location Reducer', () => {
    it('Should set error and clear location and customerId on failure', () =>{
        const errorMessage = 'There was an error';
        const initialState = {
            location: 'LEEDS',
            customerId: 'c1',
            error: ''
        };
        
        const expectedState = {
            location: '',
            customerId: '',
            error: errorMessage
        };
        
        const action = {
            type: FETCH_LOCATION_FAILURE,
            payload: errorMessage
        };
        
        const nextState = LocationReducer(initialState, action);
        
        expect(nextState).to.eql(expectedState);
    });
    
    it('Should set location and customerId and clears error on success', () =>{        
        const location = 'LONDON';
        const initialState = {
            location: '',
            customerId: '',
            error: 'previous error',
        };
        
        // Mock the local storage
        localStorage.setItem(USER_COOKIE, 'c1');
        
        const expectedState = {
            location: location,
            customerId: localStorage.getItem(USER_COOKIE),
            error: ''
        };
        
        const action = {
            type: FETCH_LOCATION_SUCCESS,
            payload: location
        };
        
        const nextState = LocationReducer(initialState, action);
        
        expect(nextState).to.eql(expectedState);
    });
});