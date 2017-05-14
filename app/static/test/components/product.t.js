import React from 'react';
import {
	renderIntoDocument,
	findRenderedDOMComponentWithClass
} from 'react-dom/test-utils';
import Product from '../../src/components/product';
import { expect } from 'chai';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const product = {
	'id': 1,
	product: 'Arsenal TV',
	category: 'Sports'
}

describe('Product Item', () => {
	it('should render a div with "productItem" class', () => {
		const component = renderIntoDocument(
            <MuiThemeProvider>
    			<Product item={product}/>
            </MuiThemeProvider>
		);
		const productEl = findRenderedDOMComponentWithClass(component, 'productItem');

		expect(productEl).to.be.ok;
	});
    
    it('should render a div with "basketItem" class if isBasket', () => {
		const component = renderIntoDocument(
            <MuiThemeProvider>
    			<Product item={product} isBasketItem={true}/>
            </MuiThemeProvider>
		);
		const productEl = findRenderedDOMComponentWithClass(component, 'basketItem');

		expect(productEl).to.be.ok;
	});

	it('should render a div with the product item text', () => {
		const component = renderIntoDocument(
            <MuiThemeProvider>
    			<Product item={product}/>
            </MuiThemeProvider>
		);
		const productEle = findRenderedDOMComponentWithClass(component, 'productItem');
		const productText = productEle.textContent;
    
		expect(productText).to.equal('Arsenal TV');
	});
});