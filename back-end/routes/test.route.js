'use strict'

let express = require('express');
let testController = require("../controllers/test.controller");

let api = express.Router();
api.post('/testFunction', testController.testFunction);

module.exports = api;