const mongoose = require('mongoose');

const StationSchema = new mongoose.Schema({
  SiteID: { type: Number },
  TradingName: { type: String },
  Address1: { type: String },
  Address2: { type: String },
  Address3: { type: String },
  Postcode: { type: String },
  Town: { type: String },
  Phone: { type: String },
  Class1: { type: Number },
  Class2: { type: Number },
  Class3: { type: Number },
  Class4: { type: Number },
  Class5: { type: Number },
  Class6: { type: Number },
  Class7: { type: Number },
  location: {
    type: { String, enum: ['Point'] },
    coordinates: { type: [Number] },
  },
});

const Station = mongoose.model('Station', StationSchema);

module.exports = Station;
