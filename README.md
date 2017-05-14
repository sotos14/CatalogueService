The catalogue application was created using Python Flask for the backend API and React for the front-end application.

It was created with Python 2.7.11 and tested on the Chrome browser.

To run the project make sure to install the dependencies.

### Setup
To use virtual environment: 
```
pip install virtualenv
```
and then 
```
virtualenv venv; source venv/bin/activate
```

Install the requirements with pip
```
pip install -r requirements.txt
```

The React project runs with webpack.
install the dependancies in the ```app/static``` directory with ```npm install```

### Unit Tests

To run the tests for the backend execute ```python manage.py test``` in the project directory
To run the tests for the front-end execute ```npm test``` in the ```app/static``` directory

### Set the user cookie to get the products by location

To set the cookie for the customer Id in chrome:

open the developer tools
select the Application tab
under the Local Storage add the appropriate key value pair
For the customer with location LONDON: customerid => customer1

For the customer with location LIVERPOOL: customerid => customer2

For the customer with location LEEDS: customerid => customer3
