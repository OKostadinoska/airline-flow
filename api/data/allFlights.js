// Process allFlights JSON file into Mongo Table Objects

const moongose = require("mongoose");
const Flight = require("../models/Flight").model;
const fs = require("fs");

let flightData = fs.readFileSync(__dirname + "/allFlights.json")
flightData = JSON.parse(flightData).flights;

let allFlights = []
flightData.forEach(flight => {
    allFlights.push(new Flight(flight));
});

module.exports = allFlights;