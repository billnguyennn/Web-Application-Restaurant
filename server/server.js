const express = require("express");
const app = express();
const port = 4200;
const bodyParser = require("body-parser");
const ejs = require('ejs');
const mongoose = require("mongoose");
const cors = require("cors")

app.set('view engine', 'ejs');
app.use(cors("*"));
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect("mongodb://localhost:27017/menuDB", {useNewUrlParser: true});

// Schema 
const menuitemSchema = {
    title: String,
    category: String,
    price: Number,
    description: String
};

const adminSchema ={
    email: String,
    password: String
};

// Should be retrieve 
const Menuitem =  mongoose.model("Menuitem", menuitemSchema);
const Admin = mongoose.model("Admin", adminSchema);


// query menu list
app.route("/Menu")
.get((req, res) => {
    Menuitem.find((err, foundMenuItems) => {
        if (!err){
            res.send(foundMenuItems);
        }else{
            res.send(err);
        }
    });
});






app.listen(port, () => {
    console.log("Server is running on port 4200");
})

