const express =  require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoute = require("./controller/userRoute");

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/internProj');
var db = mongoose.connection;
db.on('error',()=>{console.log("Error occured")});
db.once('open',()=>console.log("Connected to database"));

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/user',userRoute);
app.listen(4500,()=>console.log("Server started at 4500"))

