/*----------------------------------------------------------------------------------



                        ALTERNATIVE WAY




----------------------------------------------------------------------------------*/

// //require framework
// const express = require('express');
// const cors = require("cors");
// const dbConfig = require("./app/config/db.config");
// const app = express();
// var corsOptions = {
//     origin: "http://localhost:4200"
// };
// app.use(cors(corsOptions));
// // parse requests of content-type - application/json
// app.use(express.json());
// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));

// const db = require("./app/models");
// const Role = db.role;
// db.mongoose
// .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(() => {
//         console.log("Successfully connect to MongoDB.");
//         initial();
//     })
//     .catch(err => {
//         console.error("Connection error", err);
//         process.exit();
//     });
// // simple route

// app.get("/", (req, res) => {
//     res.json({ message: "Welcome to BB restaurant" });
// });

// require("./app/routes/auth.routes")(app);
// require("./app/routes/user.routes")(app)

// // set port, listen for requests
// const PORT = process.env.PORT || 4200;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}.`);
// });

// function initial() {
//     Role.estimatedDocumentCount((err, count) => {
//         if(!err && count === 0){
//             new Role({
//                 name:"user"
//             }).save(err => {
//                 if(err) {
//                     console.log("error", err);
//                 }
//                 console.log("added 'user' to roles collection");
//             });
//             new Role({
//                 name:"admin"
//             }).save(err => {
//                 if(err){
//                     console.log("error", err);
//                 }
//                 console.log("added 'admin' to roles collection");
//             });
//         }
//     });
// }

/*-------------------------------------------------------------------------------------------

                    UNORGANIZE STRUCTURE BACKEND



----------------------------------------------------------------------------------------------*/

const express = require("express");
const app = express();
const port = 4200;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

app.set("view engine", "ejs");
app.use(cors("*"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/restaurantDB", {
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

// Should be retrieve
const MenuItem = mongoose.model("Menuitem", menuitemSchema);
const Admin = mongoose.model("Admin", adminSchema);

app
  .route("/menu")

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
  });

app.route("/admin").post((req, res) => {
  const username = req.body.username;
  const pw = req.body.password;
  Admin.findOne({ username: username }, function (err, foundAdmins) {
    if (foundAdmins && foundAdmins.password === pw) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
});

app.listen(port, () => {
  console.log("Server is running on port 4200");
});
