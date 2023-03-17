const express = require('express');
const router = express.Router();

const StationController = require('../controllers/stations');

router.get('/', StationController.List);

module.exports = router;
