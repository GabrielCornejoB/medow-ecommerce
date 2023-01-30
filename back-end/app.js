'use strict'

// Dependencies
let express = require('express');
let bodyparser = require('body-parser');
let mongoose = require('mongoose');
let customerRoute = require('./routes/customer.route');
let adminRoute = require('./routes/admin.route');
let testRoute = require('./routes/test.route');

// Initialize app
let app = express();
let port = process.env.PORT || 4201;

// Connect to DB
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/shop', {useUnifiedTopology: true, useNewUrlParser: true}, (err, res) =>{
    if(err) console.log(err);
    else {
        app.listen(port, function() {
            console.log("\nServer running (port " + port + ")");
        })
    }
})

// Analyze requests via JSON
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json({ limit: '50mb',extended: true }));

// Permissiones for HTTP Methods
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow', 'GET, PUT, POST, DELETE, OPTIONS');
    next();
});

// Defines our API
app.use('/api', customerRoute);
app.use('/api', adminRoute);
app.use('/api', testRoute);

module.exports = app;
