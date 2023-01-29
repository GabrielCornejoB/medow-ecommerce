'use strict'

let customer = require('../models/customer.model');

const customerRegister = async function(req, res) {
    let data = req.body;

    let reg = await customer.create(data);
    console.log(reg);

    res.status(200).send({ message: reg });
}

module.exports = {
    customerRegister
}
