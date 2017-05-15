import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Confirmation from '../../src/components/confirmation';
import USER_COOKIE from '../../src/consts';
import {
	renderIntoDocument,
	findRenderedDOMComponentWithClass,
    scryRenderedDOMComponentsWithClass
} from 'react-dom/test-utils';

describe('Confirmation Page', () => {
    const userId = 'cust1';
    const products = ['item1 name', 'item2 name'];
    let component;
    
    beforeEach(() => {
        const props = {
            location: {query: {items: products}}
        };
        
        component = renderIntoDocument(
            <MuiThemeProvider>
    			<Confirmation {...props}/>
            </MuiThemeProvider>
		);
        
        localStorage.setItem(USER_COOKIE, userId);
    });
    
	it('should have the correct classes', () => {
		const containerEl = findRenderedDOMComponentWithClass(component, 'confirmation');
        const detailsEl = findRenderedDOMComponentWithClass(component, 'confirmation-details');
        const titleEl = findRenderedDOMComponentWithClass(component, 'confirmation-title');
        const itemsEl = findRenderedDOMComponentWithClass(component, 'confirmation-items');

		expect(containerEl).to.be.ok;
        expect(detailsEl).to.be.ok;
        expect(titleEl).to.be.ok;
        expect(itemsEl).to.be.ok;
	});
    
    it('should contain user id and products', () => {
        const titleEle = scryRenderedDOMComponentsWithClass(component, 'confirmation-title');
        const itemsEl = scryRenderedDOMComponentsWithClass(component, 'confirmation-items');
        
        const title = ReactDOM.findDOMNode(titleEle[0]).textContent;
        const items = ReactDOM.findDOMNode(itemsEl[0]).textContent;
        
        expect(title).to.equal(`Checkout Confirmation (user id: ${userId})`);
        expect(items).to.equal(products.toString().replace(',',''));
    });
});