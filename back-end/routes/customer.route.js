'use strict'

let express = require('express');
let customerController = require('../controllers/customer.controller');

let api = express.Router();
api.post('/customerRegister', customerController.customerRegister);

module.exports = api;
