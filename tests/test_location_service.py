import unittest
import json
from flask import url_for, jsonify
from app import create_app
from app.api import location_service
from test_helper import customerLondon

class APITestCase(unittest.TestCase):
    def setUp(self):
        self.app = create_app('testing')
        self.app_context = self.app.app_context()
        self.app_context.push()
        self.client = self.app.test_client()
    
    def tearDown(self):
	    self.app_context.pop()
        
    def test_getLocation_withNoCustomerId_returns404(self):
        response = self.client.get(url_for('api.get_location', customerId=''))
        self.assertTrue(response.status_code == 404)
        
    def test_getLocation_withValidCustomer_returnsCustomersLocation(self):
        response = self.client.get(url_for('api.get_location', customerId='customer1'))
        response_data = json.loads(response.data.decode('utf-8'))
        self.assertTrue('LONDON' == response_data['location'], response_data)
        self.assertTrue(200, response.status_code)
        
    def test_getLocation_withNotExistingCustomer_returnsError(self):
        expected_error = location_service.LOCATION_ERROR_MESSAGE
        response = self.client.get(url_for('api.get_location', customerId='invalid'))
        response_data = json.loads(response.data.decode('utf-8'))
        self.assertTrue(expected_error == response_data['error'], response_data)
        