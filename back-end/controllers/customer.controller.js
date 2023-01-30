'use strict'

let customer = require('../models/customer.model');
let login = require('../helpers/login.helper');
let register = require('../helpers/register.helper');

const customerRegister = async function(req, res) {
    register.register(customer, req, res);
}

const customerLogin = async function(req, res) {
    login.login(customer, req, res);
}

module.exports = {
    customerRegister,
    customerLogin
}
