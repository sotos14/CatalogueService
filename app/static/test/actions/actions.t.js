import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { 
    FETCH_PRODUCTS_SUCCESS,
    FETCH_LOCATION_SUCCESS,
    FETCH_LOCATION_FAILURE,
    PRODUCT_SELECTED,
    PRODUCT_REMOVED,
    fetchProducts,
    fetchLocation,
    selectProduct,
    removeProduct
} from '../../src/actions';

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('Actions', () => {
    
    describe('Fetch Products', () => {
        it('should dispatch fetchProductsSuccess action', () => {
            const mockRequest = new MockAdapter(axios);
            const products = [{
                id: 1, 
                product: 'Product 1'
            }];
            
            mockRequest.onGet(
                '/api/products/london'
            ).reply(200, {
                data: products
            });
            
            const expectedActions = [{ 
                type: FETCH_PRODUCTS_SUCCESS,
                payload: products
            }];
            
            const store = mockStore({ products: [] });
            
            return store.dispatch(fetchProducts('london'))
                .then(() =>{
                    expect(store.getActions()).to.eql(expectedActions);
                });
        });
    });
    
    describe('Fetch Location', () => {
        it('should dispatch fetchLocationSuccess and fetchProducts for valid customer Id', () => {
            const mockRequest = new MockAdapter(axios);
            const location = 'LONDON';
            const customerId = 'c1';
            
            mockRequest.onGet(
                `/api/location/${customerId}`
            ).reply(200, {
                location: location
            });
            
            const expectedActions = [{ 
                type: FETCH_LOCATION_SUCCESS,
                payload: location
            }];
            
            const store = mockStore({ location: [] });
            
            return store.dispatch(fetchLocation(customerId))
                .then(() =>{
                    expect(store.getActions()).to.eql(expectedActions);
                });
        });
        
        it('should dispatch fetchLocationError for invalid customer Id', () => {
            const mockRequest = new MockAdapter(axios);
            const errorMessage = 'error message';
            const customerId = 'c1';
            
            mockRequest.onGet(
                `/api/location/${customerId}`
            ).reply(220, {
                error: errorMessage
            });
            
            const expectedActions = [{ 
                type: FETCH_LOCATION_FAILURE,
                payload: errorMessage
            }];
            
            const store = mockStore({ error: null });
            
            return store.dispatch(fetchLocation(customerId))
                .then(() =>{
                    expect(store.getActions()).to.eql(expectedActions);
                });
        });
    });
    
    describe('Product selection', () => {
        it('should pass the product on selection', () => {
            const product = {id: 1, product: 'prod1'};
            const expectedAction = { 
                type: PRODUCT_SELECTED,
                payload: product
            };
            
            expect(selectProduct(product)).to.eql(expectedAction);
        });
        
        it('should pass the product ID on de-selection', () => {
            const expectedAction = { 
                type: PRODUCT_REMOVED,
                payload: '1'
            };
            
            expect(removeProduct('1')).to.eql(expectedAction);
        });
    });
});