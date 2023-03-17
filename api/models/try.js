const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/whatmot', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Station = require('./station');
const myStation = new Station({
  SiteID: 123,
  TradingName: 'My Trading Name',
  Address1: '123 Main St',
  Address2: 'street',
  Address3: 'lie',
  Postcode: '12345',
  Phone: '555-1234',
  Class1: 1,
  Class2: 0,
  Class3: 0,
  Class4: 0,
  Class5: 0,
  Class6: 0,
  Class7: 0,
  Town: 'cardiff',
  location: {
    type: 'Point',
    coordinates: [-122.419416, 37.774929],
  },
});

myStation.save(function (err) {
  if (err) return handleError(err);
  // saved!
});
