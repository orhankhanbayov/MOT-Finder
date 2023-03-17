import requests
from pymongo import MongoClient

# Set up MongoDB connection
client = MongoClient()
db = client['whatmot']
collection = db['stations']

# Iterate over documents in the collection
for doc in collection.find():
    # Join address fields into a single string
    address = f"{doc['Address1']},+{doc['Address2']},+{doc['Address3']},+{doc['Town']},+{doc['Postcode']}"


    
    # Make request to Google Geocoder API
    response = requests.get('https://maps.googleapis.com/maps/api/geocode/json', params={'address': address, 'key':'AIzaSyCEzRPKQcPxZ-1OPZUuIzgp-i0OqgvS0Ts'})
    data = response.json()
    
    # Extract latitude and longitude from response
    if data['status'] == 'OK':
        lat = data['results'][0]['geometry']['location']['lat']
        lng = data['results'][0]['geometry']['location']['lng']
        
        # Update document in the collection with geocode information
        collection.update_one({'_id': doc['_id']}, {'$set': {'location': {"type":"Point","coordinates":[lat,lng]}}})

