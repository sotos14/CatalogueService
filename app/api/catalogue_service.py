from flask import jsonify, make_response
from . import api

@api.route('/products/<string:location>', methods = ['GET'])
def get_products(location):
    result = {}
    
    return make_response(jsonify(result), 200, {"Content-type": "application/json"})

    