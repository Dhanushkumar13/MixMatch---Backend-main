const express = require('express');
const APPServer = express();

// REQGISTER ALL SELECT     
APPServer.use('/select', require('./Controller/select.Controller') );
APPServer.use('/contact', require('./Controller/contact.Controller'));
APPServer.use('/color',require('./Controller/color.Controller'));
APPServer.use('/day',require('./Controller/day.controller'));

module.exports = APPServer;