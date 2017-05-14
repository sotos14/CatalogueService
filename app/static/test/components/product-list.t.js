import React from 'react';
import ReactDOM from 'react-dom';
import {
	renderIntoDocument,
	findRenderedDOMComponentWithClass,
	scryRenderedComponentsWithType,
    findRenderedComponentWithType
} from 'react-dom/test-utils';
import ProductList from '../../src/components/product-list';
import Product from '../../src/components/product';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

describe('Product List', () => {
	it('should render a div with "products" class', () => {
		const products = [];
		const component = renderIntoDocument(
            <MuiThemeProvider>
    			<ProductList
    				products={products}
    			/>
            </MuiThemeProvider>
		);
		const productListEle = findRenderedDOMComponentWithClass(component, 'products');

		expect(productListEle).to.be.ok;
	});

	it('should render a Product component for each product item', () => {
		const products = [{
            'id': '1',
            'product': 'Arsenal TV'
        },{
            'id': '2',
            'product': 'Sky News'
        },{
            'id': '3',
            'product': 'Sky Sports News'
        }];
		const component = renderIntoDocument(
            <MuiThemeProvider>
    			<ProductList
    				items={products}
    			/>
            </MuiThemeProvider>
		);
		const productsEle = scryRenderedComponentsWithType(component, Product);
		
        const prod1 = ReactDOM.findDOMNode(productsEle[0]).textContent;
		const prod2 = ReactDOM.findDOMNode(productsEle[1]).textContent;
		const prod3 = ReactDOM.findDOMNode(productsEle[2]).textContent;
        
		expect(productsEle.length).to.equal(3);
		expect(prod1).to.equal('Arsenal TV');
		expect(prod2).to.equal('Sky News');
		expect(prod3).to.equal('Sky Sports News');
	});
    
    it('should pass the correct props to children', () => {
		const products = [{
            'id': '1',
            'product': 'Arsenal TV'
        }];
		const component = renderIntoDocument(
            <MuiThemeProvider>
    			<ProductList
    				items={products}
                    isBasket={true}
    			/>
            </MuiThemeProvider>
		);
        var productItem = findRenderedComponentWithType(component, Product);
        expect(productItem.props.isBasketItem).to.be.true;
	});
});