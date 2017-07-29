// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Schemas
var Networks = require("./server/model");

// Create instance of server
var app = express();
var PORT = process.env.PORT || 3000; 

// Instructions for dependencies
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static route
app.use(express.static("./public"));

