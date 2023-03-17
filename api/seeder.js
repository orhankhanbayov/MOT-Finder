const mongoose = require('mongoose');
const Station = require('./models/Station'); // Replace this with the path to your Station model
const csv = require('csv-parser');
const fs = require('fs');

// Connect to the MongoDB server and create a new database named 'mydatabase'
// mongoose.connect('mongodb://localhost:27017/mydatabase', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// Read the CSV file and insert each row into the 'Station' collection
fs.createReadStream('./active.csv')
  .pipe(csv())
  .on('data', async (row) => {
    const newStation = new Station({
      TradingName: row.TradingName,
      Address1: row.Address1,
      Address2: row.Address2,
      Address3: row.Address3,
      Postcode: row.Postcode,
      Phone: row.Phone,
      Class1: row.Class1,
      Class2: row.Class2,
      Class3: row.Class3,
      Class4: row.Class4,
      Class5: row.Class5,
      Class6: row.Class6,
    });
    await newStation.save();
  })
  .on('end', () => {
    console.log('Database seeding complete');
  });
