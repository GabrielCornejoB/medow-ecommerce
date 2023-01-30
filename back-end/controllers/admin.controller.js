'use strict'

let admin = require('../models/admin.model');
let login = require('../helpers/login.helper');
let register = require('../helpers/register.helper');

const adminRegister = async function(req, res) {
    register.register(admin, req, res);
}

const adminLogin = async function(req, res) {
    login.login(admin, req, res);
}

module.exports = {
    adminRegister,
    adminLogin
}