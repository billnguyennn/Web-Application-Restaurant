// const mongoose = require('mongoose'),
// express = require("express"),
// router = express.Router();

// // Menu Schema
// let menuSchema = require("../models/Menu");

// // Create menu
// router.post("/create-item", (req, res, next) => {
//     menuSchema.create( req.body, (error, data) => {
//         if(err){
//             return next(err);
//         } else{
//             console.log(data);
//             res.json(data);
//         }
//     });
// });

// // Read menu
// router
// .route("update-menu/:id")
// .get((req, res) => {
//     menuSchema.findById(req.params.id, (err, data) => {
//         if(err){
//             return next(error);
//         }else{
//             res.json(data);
//         }
//     });
// })

// .put((req, res, next) => {
//     menuSchema.findByIdAndUpdate( req.params.id, {
//         $set: req.body,
//     },
//     (err, data) => {
//         if (err) {
//             return next(err);
//             console.log(error);
//         } else{
//             res.json(data);
//             console.log("Item Menu updated successfully!");
//         }
//     });
// });

