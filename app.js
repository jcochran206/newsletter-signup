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

  var data = {
    members: [
      {
        email_address: email,
        status: "subscribed"
      }
    ]
  };

  var jsonData = JSON.stringify(data);

  var options = {
    url: 'https://us20.api.mailchimp.com/3.0/lists/207f5a848b',
    method: "POST",
    headers: {
      "Authorizations": "jon1 43b2a741c1418a1b07518999f57d0859-us20"
    },
    body: jsonData
  };

  request(options, function(error, response, body){

  });
  console.log(first, last, email);
});

app.listen(port, () => console.log(`application is running on ${port}!`));
