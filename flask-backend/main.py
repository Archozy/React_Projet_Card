import flask
import json
import MySQLdb

app = flask.Flask("__main__")
db = MySQLdb.connect("localhost", "root", "Winnie1999", "Articles")

cursor = db.cursor()
global resultsExportEtudiants
resultsExportEtudiants = []

@app.route("/")
def my_index():
    return flask.render_template("index.html", token="Hi bitch")


app.run(debug=True)