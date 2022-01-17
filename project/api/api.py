import time
import requests, json
from flask import Flask

app = Flask(__name__)

@app.route('/api/time')
def get_current_time():
	return {'time': time.time()}

@app.route('/api/traits')
def get_traits():
	url = "https://api.opensea.io/api/v1/collection/cryptoadz-by-gremplin"

	response = requests.request("GET", url)
	response_dict = response.json() # converts to dict
	traits_dict = response_dict['collection']['traits']
	traits_dict.pop('# Traits') # removes first item

	return traits_dict 
