
let mongoose=require('mongoose');
const express=require('express');
const app=express();
const User = require("./models/User");
 require("dotenv").config();
const db_connect=require("./config/ConnectDb");
//connect to database
db_connect();


app.use(express.json());
app.use('/users',require('./routes/UserRoute'))
app.listen(process.env.PORT, (err) => {
err ? console.log(err) : console.log(`server is runnig on ${process.env.PORT}` );
});
