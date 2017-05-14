import axios from 'axios';
import { products } from '../consts/urls';

class ProductApi {
    static getAllProducts(location) {
        const request = axios({
            method: 'get',
            url: products(location),
            headers: []
        });
        
        return request.then(response => {
            return response;
        }).catch(error => {
            return error;
        });
    }
}

export default ProductApi;