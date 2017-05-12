from flask import Flask, Blueprint, render_template, abort
from jinja2 import TemplateNotFound

home_page = Blueprint('home_page', __name__, static_folder='./dist', template_folder='.')

@home_page.route('/')
def show():
    return render_template('index.html')