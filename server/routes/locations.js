const express = require('express');
const router = express.Router();
const Location = require('../models/locations');

router.post('/', async(req, res) => {
  const newLocation = new Location(req.body);
  try{
    const savedLocation = await newLocation.save();
    res.status(200).json(savedLocation);
  }
  catch(err){
    res.status(500).json(err);
  }
});

router.get('/', async(req, res) => {
  try{
    const locations = await Location.find();
    res.status(200).json(locations);
  }
  catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;