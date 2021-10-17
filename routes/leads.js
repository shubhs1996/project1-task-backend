var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");

//course modal
const Leads = require("../model/lead");

/* GET course listing. */
router.get("/", function (req, res, next) {
  Leads.find()
    .exec()
    .then((docs) => {
      if (docs.length > 0) {
        res.status(200).json(docs);
      } else {
        res.status(200).json({
          message: "No item found",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

//creating course
router.post("/addLead", (req, res, next) => {
  const lead = new Leads({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    website: req.body.website,
    message: req.body.message,
  });
  lead
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: "",
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
