from flask import Blueprint

api = Blueprint('api', __name__)

from . import catalogue_service, location_service