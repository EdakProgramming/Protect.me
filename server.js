'use strict';

// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var os = require('os');
var wifi = require('node-wifi');
var routes = require("./routes");
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser')
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var expressValidator = require('express-validator');
var multer = require('multer');
var upload = multer({dest: './uploads'});
var flash = require('connect-flash');
var bcrypt = require('bcryptjs');
var mongo = require('mongodb');

// Schemas
var Networks = require("./server/model");

// Create instance of server
var app = express();
var PORT = process.env.PORT || 3000; 

// Instructions for dependencies
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static route
app.use(express.static("./public"));

// Handle Sessions
app.use(session({
  secret:'secret',
  saveUninitialized: true,
  resave: true
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

app.use(cookieParser());

app.use(flash());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

app.get('*', function(req, res, next){
  res.locals.user = req.user || null;
  next();
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// Wi-Fi Scanner configuration. This configuration is only valid in Linux/UNIX devices
const iface = os.networkInterfaces().en0;
wifi.init({ iface});

// -------------------------------------------------
// Application functionality

/*
	Wi-Fi Scanner
*/

wifi.scan((err, networks) => {
    if (err) throw err;
    console.log(networks);
});

/*
    WiFi Speed Test:
        https://www.npmjs.com/package/wifi-speed
        Note: The use of this feature is tentative
*/

const getSpeed = require('wifi-speed');
getSpeed(function(err, speed) {
    if (err) throw err;
    console.log('Wi-Fi Speed : ', speed);
});