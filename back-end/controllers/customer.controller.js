'use strict'

let customer = require('../models/customer.model');

const customerRegister = async function(req, res) {
    res.status(200).send({ message: "Hello World!" });
}

module.exports = {
    customerRegister
}
