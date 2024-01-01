const express = require ('express');
const HTTPServer = express();
const dotenv = require('dotenv');
var cors = require('cors');
var bodyParser = require('body-parser');

//CONFIGURING BODY-PARSER
HTTPServer.use(bodyParser.json());
HTTPServer.use(bodyParser.urlencoded({extended: true}));

//ENABLING CORS
HTTPServer.use(cors())

// INITIALIZING PORT 
const PORT = 5000;

//INTIALIZE APP SERVER
HTTPServer.use('/api',require('./app'));

//INJECTING DBCONFIG
dotenv.config();
require("./Configs/dbconfig");


HTTPServer.listen(PORT, "0.0.0.0", (err)=>{
    if(err) throw err;
    console.log(`listening to port ${PORT}`);
});

