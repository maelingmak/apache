import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, desc
from flask import Flask, jsonify, render_template, request
import csv

# Create App
app = Flask(__name__)

# Connect to sqlite database
engine = create_engine("sqlite:///../db/apache.sqlite")
Base = automap_base()
Base.prepare(engine, reflect=True)
session = Session(engine)

# Storing tables
Data = Base.classes.access_response

# print(Base.classes)



# Returns the dashboard homepage
@app.route("/")
def home():
    return render_template("index.html")

# Returns a list of sample names in list format
@app.route("/ip")
def ip_list():

    # Empty list for sample ids
    ip = []
    
    # Grab metadata table
    results = session.query(Data)

    # Loop through query & grab ids
    for result in results:
        ip.append("ip:" + str(result.ip))

    return jsonify(ip)

# Returns a list of OTU descriptions
@app.route("/method")
def method():

    # Empty list for descriptions
    method = []
    
    # Grab otu table
    results = session.query(Data)

    # Loop through query & grab descriptions
    for result in results:
        method.append(result.Method)

    return jsonify(method)
#@app.route("/geolocation")
#def geolocation():
#    """Serving lat and lon"""
#    
if __name__ == '__main__':
    app.run(debug=True)