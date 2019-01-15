// jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(bodyParser.urlencoded({entended: true}));
app.use(express.static("public"));

const port = 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + "/signup.html");
});

app.post('/', function(req, res){

  var first = req.body.fname;
  var last = req.body.lname;
  var email = req.body.email;
  console.log(first, last, email);
});

app.listen(port, () => console.log(`application is running on ${port}!`));

//43b2a741c1418a1b07518999f57d0859-us20
