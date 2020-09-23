var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");


//course modal
const Course =require('../model/course')





/* GET course listing. */
router.get('/', function(req, res, next) {
    Course.find()
    .exec()
    .then(docs => {

        if(docs.length>0){
        res.status(200).json(docs);
        }else {
            res.status(200).json({
                message:'No item found'
            })
        }  
    
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});


//creating course 
router.post("/addCourse", (req, res, next) => {
    const course = new Course({
      _id: new mongoose.Types.ObjectId(),
      title: req.body.title,
      detail:req.body.detail,
      price: req.body.price,
      duration:req.body.duration,
      createdBy:req.body.u_id,
    });
    course
      .save()
      .then(result => {
        console.log(result);
        res.status(200).json({
          message: "course added successfully"
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });



  //updating course
  router.patch("/:courseId", (req, res, next) => {
    const id = req.params.courseId;
    const updateOps = {};
    
    Course.update({ _id: id }, { $set: req.body })
      .exec()
      .then(result => {
        res.status(200).json({
            message: 'Course updated',
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });


//deleting course
  router.delete("/:courseId", (req, res, next) => {
    const id = req.params.courseId;
    Course.remove({ _id: id })
      .exec()
      .then(result => {
        res.status(200).json({
            message: 'Course deleted'
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });


module.exports = router;
