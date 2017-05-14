import axios from 'axios';
import { location } from '../consts/urls';

class ProductApi {
    static getLocation(customerId) {
        const request = axios({
            method: 'get',
            url: location(customerId),
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