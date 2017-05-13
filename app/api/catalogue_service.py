from flask import jsonify, make_response
from . import api
from data import products

'''
Returns the products availableto the given location.
'''
@api.route('/products/<string:location>', methods = ['GET'])
def get_products(location):
    result = {}
    result['data'] = filterValues(location, products)
    
    return make_response(jsonify(result), 200, {"Content-type": "application/json"})
    
def filterValues(location, data):
    filter_by = ['', location.upper()]
    return [obj for obj in data if obj['locationId'] in filter_by]
    