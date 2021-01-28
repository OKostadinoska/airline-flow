const mongoose = require("mongoose");

const reservationSchema = require("./Reservation").schema

let flightSchema = new mongoose.Schema({
  name: String,
  capacity: Number,
  isAvailable: Boolean,
  location: String,
  reservation: {
    require: false,
    type: reservationSchema
  } 
});

let Flight = mongoose.model("Flight", flightSchema);

module.exports.model = Flight;
module.exports.schema = flightSchema;