'use strict'

let bcrypt = require('bcrypt-nodejs');

exports.register = async function(userType, req, res) {
    let data = req.body;
    let userList = [];

    userList = await userType.find({email: data.email});

    if (userList.length == 0) {
        if (data.password) {
            bcrypt.hash(data.password, null, null, async function(err, hash) {
                if (hash) {
                    data.password = hash;
                    let reg = await userType.create(data);
                    res.status(200).send({data: reg});
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
