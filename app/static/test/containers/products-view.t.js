import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import {
	renderIntoDocument,
	findRenderedDOMComponentWithClass,
	scryRenderedComponentsWithType,
    scryRenderedDOMComponentsWithClass,
    findRenderedComponentWithType
} from 'react-dom/test-utils';
import {ProductsView} from '../../src/containers/products-view';
import USER_COOKIE from '../../src/consts';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
    products: {
        news: {},
        sports: {}
    },
    basketItems: {},
    location: {location: '', error: ''}
});

describe('Product View', () => {
    
    afterEach(() => {
        localStorage.clear();
    });
    
    it('should fetch location if customerid is present', () => {
        const props = {
            fetchLocation: spy(),
            location: ''
        }
        
        localStorage.setItem(USER_COOKIE, 'c1');
        
        const wrapper = mount(
            <Provider store={store}>
                <ProductsView {...props} />
            </Provider>
        );
        
        expect(props.fetchLocation.calledOnce).to.equal(true);
    });
    
    it('should fetch products if location is present and no products are loaded', () => {
        const props = {
            fetchLocation: spy(),
            fetchProducts: spy(),
            location: 'LONDON',
            products: {}
        }
        
        const wrapper = mount(
            <Provider store={store}>
                <MuiThemeProvider>
                    <ProductsView {...props} />
                </MuiThemeProvider>
            </Provider>
        );
        
        expect(props.fetchLocation.called).to.equal(false);
        expect(props.fetchProducts.called).to.equal(true);
    });
    
    it('should show error if no location was found', () => {
        const props = {
            location: '',
            products: {}
        }
        
        const component = renderIntoDocument(
            <Provider store={store}>
                <MuiThemeProvider>
                    <ProductsView {...props} />
                </MuiThemeProvider>
            </Provider>
		);
		const productListEle = findRenderedDOMComponentWithClass(component, 'products-view-error');

		expect(productListEle).to.be.ok;
    });
    
    it('should have a product view class', () => {
        const props = {
            location: 'LONDON',
            products: {
                sports: [{id: 1, product: 'p1'}],
                news: [{id: 2, product: 'p2'}]
            }
        }
        
        const component = renderIntoDocument(
            <Provider store={store}>
                <MuiThemeProvider>
                    <ProductsView {...props} />
                </MuiThemeProvider>
            </Provider>
		);
		const productsEle = findRenderedDOMComponentWithClass(component, "products-view");

		expect(productsEle).to.be.ok;
    });
    
    it('should have three product containers', () => {
        const props = {
            location: 'LONDON',
            products: {
                sports: [{id: 1, product: 'p1'}],
                news: [{id: 2, product: 'p2'}]
            }
        }
        
        const component = renderIntoDocument(
            <Provider store={store}>
                <MuiThemeProvider>
                    <ProductsView {...props} />
                </MuiThemeProvider>
            </Provider>
		);
		const productsEle = scryRenderedDOMComponentsWithClass(component, "paper-container");

		expect(productsEle.length).to.equal(3);
    });
});