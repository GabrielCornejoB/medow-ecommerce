'use strict'

let express = require('express');
let bodyparser = require('body-parser');
let mongoose = require('mongoose');

let app = express();

let port = process.env.PORT || 4201;

mongoose.connect('mongodb://127.0.0.1:27017/shop', (err, res) =>{
    if(err) console.log(err);
    else {
        app.listen(port, function() {
            console.log("Server running (port " + port + ")");
        })
    }
})

module.exports = app;