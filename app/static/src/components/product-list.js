import React, { Component } from 'react';
import _ from 'lodash';
import Product from './product';

import '../styles.scss';

export default class ProductList extends Component {
    renderItems() {
        const items = this.props.items;
        if(items && !_.isEmpty(items)) {
            return items.map((item) => {
                return (
                    <li key={item.id}>
                        <Product 
                            item={item}
                            isBasketItem={this.props.isBasket}
                            onCheck={this.props.onCheck}
                        />
                    </li>
                );
            });
        }
    }
    
    render() {        
        return (
            <div className="products">
                <ul className="product-list">
                    {this.renderItems()}
                </ul>
            </div>
        );
    }
}