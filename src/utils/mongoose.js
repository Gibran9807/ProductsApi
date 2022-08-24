const mongoose = require("mongoose");

mongoose.connect("mongodb://dbo-operator:mongo0p3rqt0r@Mongo01:27017/Products?replicaSet=dbrs")
    .then(() => console.log("Connected to Mongo Database"))
    .catch(err => console.error(err));