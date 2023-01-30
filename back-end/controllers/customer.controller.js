'use strict'

let customer = require('../models/customer.model');
let bcrypt = require('bcrypt-nodejs');

const customerRegister = async function(req, res) {
    let data = req.body;
    let customersList = [];

    customersList = await customer.find({email:data.email});

    if (customersList.length == 0) {
        if (data.password) {
            bcrypt.hash(data.password, null, null, async function(err, hash) {
                if (hash) {
                    data.password = hash;
                    let reg = await customer.create(data);
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

const customerLogin = async function(req, res) {
    let data = req.body;

    let customerList = [];

    customerList = await customer.find({email: data.email});

    if (customerList.length == 0) {
        res.status(200).send({message: "E-mail not found", data: undefined});
    }
    else {
        let user = customerList[0];

        bcrypt.compare(data.password, user.password, async function(err, check) {
            if (check) {
                res.status(200).send({
                    data: user,
                    token: jwt.createToken(user)
                });
            }
            else {
                res.status(200).send({message: "Incorrect password", data: undefined});
            }
        });
    }
}

module.exports = {
    customerRegister,
    customerLogin
}
