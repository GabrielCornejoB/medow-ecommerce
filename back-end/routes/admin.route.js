'use strict'

let express = require('express');
let adminController = require('../controllers/admin.controller');

let api = express.Router();
api.post('/adminRegister', adminController.adminRegister);
api.post('/adminLogin', adminController.adminLogin);

module.exports = api;