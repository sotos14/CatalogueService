import unittest
import json
from flask import url_for, jsonify
from app import create_app
from app.api import catalogue_service
from test_helper import londonAndNewsData, liverpoolAndNewsData, newsData

class APITestCase(unittest.TestCase):
    
    def setUp(self):
        self.app = create_app('testing')
        self.app_context = self.app.app_context()
        self.app_context.push()
        self.client = self.app.test_client()
    
    def tearDown(self):
	    self.app_context.pop()
        
    def test_getProduct_withNoLocation_returns404(self):
        response = self.client.get(url_for('api.get_products', location=''))
        self.assertTrue(response.status_code == 404)
        
    def test_getProduct_withLocationMixedCase_returnsDataCorrectly(self):
        response = self.client.get(url_for('api.get_products', location='loNdOn'))
        expected_values = {'data': londonAndNewsData}
        response_values = json.loads(response.data.decode('utf-8'))
        self.assertTrue(expected_values == response_values, response_values)
        self.assertTrue(response.status_code == 200)
        
    def test_getProduct_withLocationLondon_returnsLondonDataAndNews(self):
        response = self.client.get(url_for('api.get_products', location='london'))
        expected_values = {'data': londonAndNewsData}
        response_values = json.loads(response.data.decode('utf-8'))
        self.assertTrue(expected_values == response_values, response_values)
        self.assertTrue(response.status_code == 200)
        
    def test_getProduct_withLocationLiverpool_returnsLiverpoolDataAndNews(self):
        response = self.client.get(url_for('api.get_products', location='liverpool'))
        expected_values = {'data': liverpoolAndNewsData}
        response_values = json.loads(response.data.decode('utf-8'))
        self.assertTrue(expected_values == response_values, response_values)
        self.assertTrue(response.status_code == 200)
    
    def test_getProduct_withOtherLocation_returnsNewsOnly(self):
        response = self.client.get(url_for('api.get_products', location='leeds'))
        expected_values = {'data': newsData}
        response_values = json.loads(response.data.decode('utf-8'))
        self.assertTrue(expected_values == response_values, response_values)
        self.assertTrue(response.status_code == 200)
        
    def test_getProduct_withRandomStringForLocation_returnsNewsOnly(self):
        response = self.client.get(url_for('api.get_products', location='Any String'))
        expected_values = {'data': newsData}
        response_values = json.loads(response.data.decode('utf-8'))
        self.assertTrue(expected_values == response_values, response_values)
        self.assertTrue(response.status_code == 200)

