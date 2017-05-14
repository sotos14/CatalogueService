from flask import make_response,request,jsonify
from . import api
from data import customerData

class InvalidCustomerError(ValueError):
    pass

LOCATION_ERROR_MESSAGE = 'There was a problem retrieving the customer information'

'''
Returns the location of the given customer Id.
If no customer Id is found, an error message is thrown.
'''
@api.route('/location/<string:customerId>', methods = ['GET'])
def get_location(customerId):
    result = get_location(customerId);
    
    if not result:
        raise InvalidCustomerError(LOCATION_ERROR_MESSAGE)        
    
    return make_response(jsonify(result), 200, {"Content-type": "application/json"})
    
@api.errorhandler(InvalidCustomerError)
def bad_request_handler(error):
    return bad_request(error.message)

def get_location(customerId):
    if customerId in customerData.keys():
        return {'location': customerData[customerId]}
    else:
        return None

def bad_request(message):
    response = jsonify({'error': message})
    response.status_code = 220
    return response
    


