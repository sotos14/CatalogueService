import ProductReducer from '../../src/reducers/reducer-products';
import { FETCH_PRODUCTS_SUCCESS } from '../../src/actions';

const products = [{
    id: 1, 
    product: 'Product 1',
    category: 'Sports'
}, {
    id: 2, 
    product: 'Product 2',
    category: 'News'
}, {
    id: 3,
    product: 'Product 3',
    category: 'News'
}];

describe('Product Reducer', () => {
    it('Should add new products by category', () =>{
        const initialState = {
            sports: [],
            news: []
        };
        
        const expectedState = {
            sports: [{
                id: 1, 
                product: 'Product 1',
                category: 'Sports'
            }],
            news: [{
                id: 2, 
                product: 'Product 2',
                category: 'News'
            }, {
                id: 3,
                product: 'Product 3',
                category: 'News'
            }]
        };
        
        const action = {
            type: FETCH_PRODUCTS_SUCCESS,
            payload: products
        };
        
        const nextState = ProductReducer(initialState, action);
        
        expect(nextState).to.eql(expectedState);
    });
});