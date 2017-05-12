import unittest

class APITestCase(unittest.TestCase):
    
    def test_shouldAlwaysFail(self):
        self.assertTrue(0 == 1, 'This sample test is meant to fail.')