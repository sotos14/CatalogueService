from flask import make_response,request,jsonify
from . import api

@api.route('/location/<string:customerId>', methods = ['GET'])
def get_location(customerId):
    '''
    Returns the location of the given customer Id.
    If no customer Id is found, an error message is thrown.
    '''
    result = {};     
    
    return make_response(jsonify(result), 200, {"Content-type": "application/json"})
