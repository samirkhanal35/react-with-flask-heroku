from flask import Flask,jsonify
import os
app = Flask(__name__, static_folder='./build', static_url_path='/')

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/api/time')
def hello():
    message = jsonify(msg="Hello from flask")
    print(message)
    return message



# import time
# from flask import Flask

# app = Flask(__name__)

# @app.route('/time')
# def get_current_time():
#     return {'time': time.time()}

