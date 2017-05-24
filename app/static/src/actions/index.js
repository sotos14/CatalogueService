import axios from 'axios';
import productApi from '../api/productApi';
import locationApi from '../api/locationApi';

export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_LOCATION_SUCCESS = 'FETCH_LOCATION_SUCCESS';
export const FETCH_LOCATION_FAILURE = 'FETCH_LOCATION_FAILURE';
export const PRODUCT_SELECTED = 'PRODUCT_SELECTED';
export const PRODUCT_REMOVED = 'PRODUCT_REMOVED';
export const BASKET_CLEARED = 'BASKET_CLEARED';

export function fetchProducts(location) {
    return function(dispatch) {
        return productApi.getAllProducts(location).then(response =>{
            dispatch(fetchProductsSuccess(response.data.data));
        }).catch(error => {
            throw(error);
        });
    }
}

export function fetchProductsSuccess(products) {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    };
}

export function fetchLocation(customerId) {
    return function(dispatch) {
        return locationApi.getLocation(customerId).then(response => {
            if(response.status == 200) {
                dispatch(fetchLocationSuccess(response.data.location));
            } else {
                dispatch(fetchLocationError(response.data.error));
            }            
        }).catch(function(error){
            throw(error);
        });
    }
}

export function fetchLocationSuccess(location) {
    return {
        type: FETCH_LOCATION_SUCCESS,
        payload: location
    };
}

export function fetchLocationError(error) {
    return {
        type: FETCH_LOCATION_FAILURE,
        payload: error
    };
}

export function selectProduct(product) {
    return {
        type: PRODUCT_SELECTED,
        payload: product
    };
}

export function removeProduct(productId) {
    return {
        type: PRODUCT_REMOVED,
        payload: productId
    };
}

export function clearBasket() {
    return {
        type: BASKET_CLEARED,
        payload: {}
    }
}
