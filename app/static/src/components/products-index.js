import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import ProductsView from '../containers/products-view';

export default class ProductsIndex extends Component {
    render() {
        return(
            <div>
                <AppBar showMenuIconButton={false} />
                <div>
                    <ProductsView/>
                </div>
                <AppBar showMenuIconButton={false} />
            </div>
        );
    }
}