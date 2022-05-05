
/*-------------------------------------------------------------------------------------------

                    UNORGANIZE STRUCTURE BACKEND



----------------------------------------------------------------------------------------------*/

const express = require("express");
const app = express();
const port = process.env.BACKEND_PORT || process.env.PORT || 4200;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require('express-session');
const bcrypt = require("bcrypt");
const saltRounds = 10;

app.set("view engine", "ejs");
app.use(cors("*"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// mongoose.connect("mongodb://localhost:27017/restaurantDB", {
mongoose.connect(process.env.MONGO_CONN, {
  useNewUrlParser: true,
});


// Schema
const menuitemSchema = new mongoose.Schema({
  title: String,
  category: String,
  price: Number,
  description: String,
});

const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstname: String,
  lastname: String,
});

const orderedSchema = new mongoose.Schema({
  id: String,
  quantity: Number,
})


// Should be retrieve
const MenuItem = mongoose.model("Menuitem", menuitemSchema);
const Admin = mongoose.model("Admin", adminSchema);
const User = mongoose.model("User", userSchema);


app.route("/menu")

  // query menu list
  .get((req, res) => {
    MenuItem.find((err, foundMenuItems) => {
      if (!err) {
        res.send(foundMenuItems);
      } else {
        res.send(err);
      }
    });
  })
  // add new item to db
  .post((req, res) => {
    const addNew = req.body;
    MenuItem.create(
      {
        ...addNew,
      },
      function (err, addedNewMenuItem) {
        if (addedNewMenuItem) {
          res.send(true);
        } else {
          res.send(false);
        }
      }
    );
  })
  // delete item from db
  .delete((req, res) => {
    const deleteItem = req.body._id; // receive data from front-end 
    MenuItem.findOneAndRemove(
      {
        _id: deleteItem     // using method findOneAndRemove to delete _id
      },
      function (err, deletedMenuItem) {
        if (deletedMenuItem) {
          res.send(true);
        } else {
          res.send(false);
        }
      }
    )
  })
  //Update item from db
  .put((req, res) => {
    const updateItem = req.body;
    MenuItem.findOneAndUpdate(
      { _id: updateItem._id }, { $set: updateItem }, function (err, update) {
        if (!err) {
          res.send(true);
        } else {
          res.send(err);
        }
      }
    )
  })

/*
  Create new route to receive data from front-end. rs

  Create new variable to receive _id
  
*/
app.route("/admin/menu/update")
  .get((req, res) => {
    let updateItem = req.query._id; // receive _id from frontend.
    // console.log(updateItem); //--> log out an ID from selected items
    MenuItem.findOne({ _id: updateItem }, function (err, docs) {
      if (!err) {
        res.send(docs)
      } else {
        res.send(err);
      }
    });

    /* 
      findById() is restrictly find by only that ID. If requirement is findById(),
      we must use findById. Otherwise, use findOne() or find()
    */
  });

// app.route("/order").post((req, res) => {
//   const id = req.body._id;
//   const quantity = req.body.quantity;
//   console.log(quantity);
// })

app.route("/admin").post((req, res) => {
  const username = req.body.username;
  const pw = req.body.password;
  Admin.findOne({ username: username }, function (err, foundAdmins) {
    if (foundAdmins && bcrypt.compareSync(pw, foundAdmins.password)) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
});

app.route("/user")
.post((req, res) => {
  const username = req.body.username;
  const pws = req.body.password;
  User.findOne({ username: username }, function (err, foundUser) {
    if (foundUser && foundUser.password === pws) {
      res.send(true);
    } else {
      res.send(false);
    }
  })
})
  
  app.route("/usersignup")
  .post( async (req, res) => {
    const addNewUser = req.body;
    User.create({ ...addNewUser}, function(err, foundUsers){
      if(foundUsers){
        res.send(true);
      }else{
        res.send(false);
      }
    })
  })

const appBinding = process.env.NODE_ENV === 'production' ? '0.0.0.0' : '127.0.0.1';
app.listen(port, appBinding, () => {
  console.log("Server is running on port " + appBinding + ":" + port);
});
