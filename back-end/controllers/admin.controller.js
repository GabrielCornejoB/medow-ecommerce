'use strict'

let admin = require('../models/admin.model');
let bcrypt = require('bcrypt-nodejs');

const adminRegister = async function(req, res) {
    let data = req.body;
    let adminsList = [];

    adminsList = await admin.find({email:data.email});

    if (adminsList.length == 0) {
        if (data.password) {
            bcrypt.hash(data.password, null, null, async function(err, hash) {
                if (hash) {
                    data.password = hash;
                    let reg = await admin.create(data);
                    res.status(200).send({ data: reg });
                }
                else {
                    res.status(200).send({ message: "Error hashing password", data: undefined });
                }
            });
        }
        else {
            res.status(200).send({ message: "Password required", data: undefined });
        }
    }
    else {
        res.status(200).send({ message: "E-mail not available", data: undefined });
    }
}

module.exports = {
    adminRegister
}