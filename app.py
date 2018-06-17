import datetime as dt
import numpy as np
import pandas as pd

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, inspect

from flask import Flask, jsonify, render_template, request, redirect

#############
# Flask Setup
#############

#############
# Data Setup
#############
from flask_sqlalchemy import SQLAlchemy

engine = create_engine("sqlite:///../db/apache.sqlite")
base= automap_base()
base.prepare(engine, reflect=True)
inspector = inspect(engine)
log_table = base.classes.access_response
session = Session(engine)


app = Flask(__name__)

@app.route("/")
def home():
    """ Render Home Page"""
    return render_template("index.html")

@app.route("/ip")    
def ip_list():
    """List of ips"""
    ip_list = session.query(log_table.ip).all()
    return jsonify(ip_list)

#@app.route("/geolocation")
#def geolocation():
#    """Serving lat and lon"""
#    
if __name__ == '__main__':
    app.run(debug=True)