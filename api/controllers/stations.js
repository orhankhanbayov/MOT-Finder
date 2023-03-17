const Station = require('../models/station');

const StationController = {
  List: (req, res) => {
    Station.find(
      {
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [req.body.lat, req.body.long],
            },
            $minDistance: 0,
            $maxDistance: 3200,
          },
        },
      },
      (err, stations) => {
        if (err) {
          throw err;
        } else {
          res.status(200).json({ stations: stations });
        }
      }
    );
  },
};

module.exports = StationController;
