'use strict'

let bcrypt = require('bcrypt-nodejs');

exports.login = async function(userType, req, res) {
    let data = req.body;

    let userList = [];

    userList = await userType.find({email: data.email});

    if (userList.length == 0) {
        res.status(200).send({message: "E-mail not found", data: undefined});
    }
    else {
        let user = userList[0];

        bcrypt.compare(data.password, user.password, async function(err, check) {
            if (check) {
                res.status(200).send({
                    data: user
                    // token: jwt.createToken(user)
                });
            }
            else {
                res.status(200).send({message: "Incorrect password", data: undefined});
            }
        });
    }
}