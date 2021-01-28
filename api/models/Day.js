var mongoose = require("mongoose");
const flightSchema = require("./Flight").schema;

var daySchema = new mongoose.Schema({
  date: Date,
  flights: [flightSchema]
});
var Day = mongoose.model("Day", daySchema);

module.exports.model = Day;
module.exports.schema = daySchema;
