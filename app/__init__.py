import os
from flask import Flask, current_app
from app.config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate


app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)


from app.api import bp as api_bp
app.register_blueprint(api_bp, url_prefix='/api')


@app.route('/')
def index():
    return "Working"

from app import models
