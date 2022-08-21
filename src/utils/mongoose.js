const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Products")
    .then(() => console.log("Connected to Mongo Database"))
    .catch(err => console.error(err));