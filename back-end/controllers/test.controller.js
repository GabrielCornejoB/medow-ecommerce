'use strict'

let testHelper = require('../helpers/test.helper');

const testFunction = async function(req, res) {
    testHelper.sendMessage("Hello world", req, res);
}

module.exports = {
    testFunction
}