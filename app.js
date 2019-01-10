// jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(bodyParser.urlencoded({entended: true}));

const port = 3000;

app.get('/', (req, res) => res.sendFile(__dirname + "signup.html"));

app.listen(port, () => console.log(`application is running on ${port}!`));
