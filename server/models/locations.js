const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema(
  {
    username: { type: String, require: true },
    title: { type: String},
    description: { type: String},
    rating: {
      type: Number, min: 0, max: 10,
    },
    latitude: { type: Number, require: true },
    longitude: { type: Number, require: true },
  },
  { timestamps: true },
);

module.exports = mongoose.model('locations', locationSchema);