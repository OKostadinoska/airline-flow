var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

const Day = require("../models/Day").model;
const Reservation = require("../models/Reservation").model;

// Parameters:
// {
//   "date": String ("Dec 02 2019 06:00"),
//   "flight": flight id,
// 	"name": String,
// 	"phone": String,
// 	"email": String
// }

router.post("/", function(req, res, next) {
  Day.find({ date: req.body.date }, (err, days) => {
    if (!err) {
      if (days.length > 0) {
        let day = days[0];
        day.flights.forEach(flight => {
          if (flight._id == req.body.flight) {
            // The correct flight is flight
            flight.reservation = new Reservation({
              name: req.body.name,
              phone: req.body.phone,
              email: req.body.email
            });
            flight.isAvailable = false;
            day.save(err => {
              if (err) {
                console.log(err);
              } else {
                console.log("Reserved");
                res.status(200).send("Added Reservation");
              }
            });
          }
        });
      } else {
        console.log("Day not found");
      }
    }
  });
});

module.exports = router;
