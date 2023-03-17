const filePath = './active.csv';
const apiKey = 'AIzaSyCEzRPKQcPxZ-1OPZUuIzgp-i0OqgvS0Ts';
const Papa = require('papaparse');
const axios = require('axios');
const fs = require('fs');

const geocodeEndpoint = 'https://maps.googleapis.com/maps/api/geocode/json';

const columns = {
  siteId: 'SiteID',
  tradingName: 'TradingName',
  address1: 'Address1',
  address2: 'Address2',
  address3: 'Address3',
  postcode: 'Postcode',
  phone: 'Phone',
  class1: 'Class1',
  class2: 'Class2',
  town: 'Town',
  class3: 'Class3',
  class4: 'Class4',
  class5: 'Class5',
  class6: 'Class6',
  class7: 'Class7',
  geocode: 'Geocode',
};

async function geocodeCSV() {
  const fileData = fs.readFileSync(filePath, 'utf8');
  const parsedData = Papa.parse(fileData, { header: true });

  for (const row of parsedData.data) {
    const addressParam = `${row[columns.town]}, ${row[columns.postcode]}`;

    try {
      const response = await axios.get(geocodeEndpoint, {
        params: {
          address: addressParam,
          key: apiKey,
        },
      });

      const location = response.data.results[0].geometry.location;
      const latitude = location.lat;
      const longitude = location.lng;

      row[columns.geocode] = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };
    } catch (error) {
      console.error(
        `Error geocoding address ${addressParam}: ${error.message}`
      );
    }
  }

  const transformGeocode = function (value, column) {
    if (column === columns.geocode) {
      return `${value.type},[${value.coordinates.join(',')}]`;
    }
    console.log(value);
    return value;
  };

  const updatedCSV = Papa.unparse(parsedData.data, {
    header: true,
    transform: transformGeocode,
  });

  fs.writeFileSync(filePath, updatedCSV);
}

geocodeCSV();
