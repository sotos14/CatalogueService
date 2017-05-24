import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, browserHistory } from 'react-router';
import _ from 'lodash';
import Dialog from 'material-ui/Dialog';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import USER_COOKIE from '../consts';
import ProductList from '../components/product-list';
import * as actions from '../actions';


import '../styles.scss';

export class ProductsView extends Component {
    
    constructor(props) {
        super(props);
        this.showError = this.showError.bind(this);
        this.onItemChecked = this.onItemChecked.bind(this);
        this.renderCheckoutButton = this.renderCheckoutButton.bind(this);
    }
    
    componentWillMount() {
        const customerId = localStorage.getItem(USER_COOKIE);
        if(customerId) {
            this.props.fetchLocation(customerId);
        }
        
        if(this.props.location && _.isEmpty(this.props.products)) {
            this.props.fetchProducts(this.props.location);
        }
    }
    
    showError() {
        const errorMessage = this.props.locationError || 'You must set the customerid to the local storage...';
        
        return(
            <div className="products-view-error">
                <h2>Error</h2>
                <p>{errorMessage}</p>
                <p>In chrome dev console set by: localStorage.setItem(customerid, customer1)</p>
                <p>
                    the valid values are:
                </p>
                <ul>
                    <li>customer1 for location LONDON</li>
                    <li>customer2 for location LIVERPOOL</li>
                    <li>customer3 for location LEEDS</li>
                </ul>
            </div>
        );
    }
    
    onItemChecked(event, isItemChecked, item) {        
        if(item) {
            if(isItemChecked) {
                this.props.selectProduct(item);
            } else {
                this.props.removeProduct(item.id);
            }
        }
    }
    
    onCheckout() {
        const items = this.props.basketItems;
        let queryParam = '';
        if(items) {
            queryParam = items.map(item => item.product);
        }
        
        this.props.clearBasket();
        browserHistory.push({pathname: 'confirm', query:{items: queryParam}});
    }
    
    renderCheckoutButton() {
        const items = this.props.basketItems;
        let queryParam = '';
        if(items) {
            queryParam = items.map(item => item.product);
        }
        
        return(
            <div className="checkout-button">
                <RaisedButton 
                    label="Checkout"
                    primary={true}
                    disabled={_.isEmpty(this.props.basketItems)}
                    onTouchTap={() => this.onCheckout()}
                />
            </div>
        );
    }
    
    render() {
        
        if(!this.props.location) {
            return this.showError();
        }
        
        if(this.props.location && _.isEmpty(this.props.products)) {
            this.props.fetchProducts(this.props.location);
        }
        
        return(
            <div className="products-view">
                <Paper className="paper-container">
                    <h4 className="title">News</h4>
                    <ProductList
                        items={this.props.products.news}
                        onCheck={this.onItemChecked}
                    />
                </Paper>
                
                <Paper className="paper-container">
                    <h4 className="title">Sports</h4>
                    <ProductList
                        items={this.props.products.sports}
                        onCheck={this.onItemChecked}
                    />
                </Paper>
                
                <Paper className="paper-container">
                    <h4 className="title">Basket</h4>
                    <ProductList
                        items={this.props.basketItems}
                        isBasket={true}
                    />
                    {this.renderCheckoutButton()}
                </Paper>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
      products: state.products,
      basketItems: state.basketItems ? _.values(state.basketItems) : [],
      location: state.location.location,
      locationError: state.location.error
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsView);