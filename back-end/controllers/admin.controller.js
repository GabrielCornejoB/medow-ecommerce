'use strict'

let admin = require('../models/admin.model');
let bcrypt = require('bcrypt-nodejs');
let jwt = require('../helpers/jwt.helper');
let login = require('../helpers/login.helper');


// Buscar forma de no copiar y pegar codigo en registro de admins y de customers
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

const adminLogin = async function(req, res) {
    login.login(admin, req, res);
    // let data = req.body;

    // let adminList = [];

    // adminList = await admin.find({email: data.email});

    // if (adminList.length == 0) {
    //     res.status(200).send({message: "E-mail not found", data: undefined});
    // }
    // else {
    //     let user = adminList[0];

    //     bcrypt.compare(data.password, user.password, async function(err, check) {
    //         if (check) {
    //             res.status(200).send({
    //                 data: user,
    //                 token: jwt.createToken(user)
    //             });
    //         }
    //         else {
    //             res.status(200).send({message: "Incorrect password", data: undefined});
    //         }
    //     });
    // }
}

module.exports = {
    adminRegister,
    adminLogin
}