import BasketReducer from '../../src/reducers/reducer-basket';
import { 
    PRODUCT_SELECTED,
    PRODUCT_REMOVED
 } from '../../src/actions';

const prod1 = {
    id: 1, 
    product: 'Product 1',
    category: 'Sports'
};

const prod2 = {
    id: 2, 
    product: 'Product 2',
    category: 'Sports'
};

const prod3 = {
    id: 3, 
    product: 'Product 3',
    category: 'Sports'
};

describe('Basket Reducer', () => {
    describe('Select Product', () => {
        it('Should add new products when selected', () =>{
            const initialState = {
                1: prod1
            };
            
            const expectedState = {
                1: prod1,
                2: prod2
            };
            
            const action = {
                type: PRODUCT_SELECTED,
                payload: prod2
            };
            
            const nextState = BasketReducer(initialState, action);
            
            expect(nextState).to.eql(expectedState);
        });
        
        it('Should not add duplicate products', () =>{
            const initialState = {
                1: prod1
            };
            
            const expectedState = {
                1: prod1
            };
            
            const action = {
                type: PRODUCT_SELECTED,
                payload: prod1
            };
            
            const nextState = BasketReducer(initialState, action);
            
            expect(nextState).to.eql(expectedState);
        });
    });
    
    describe('Remove Products', () => {
        it('Should remove the given product', () =>{
            const initialState = {
                1: prod1,
                2: prod2,
                3: prod3
            };
            
            const expectedState = {
                1: prod1,
                2: prod2
            };
            
            const action = {
                type: PRODUCT_REMOVED,
                payload: 3
            };
            
            const nextState = BasketReducer(initialState, action);
            
            expect(nextState).to.eql(expectedState);
        });
        
        it('Should not remove anything if Id does not exist in basket', () =>{
            const initialState = {
                1: prod1,
                2: prod2
            };
            
            const expectedState = {
                1: prod1,
                2: prod2
            };
            
            const action = {
                type: PRODUCT_REMOVED,
                payload: 3
            };
            
            const nextState = BasketReducer(initialState, action);
            
            expect(nextState).to.eql(expectedState);
        });
    });
});