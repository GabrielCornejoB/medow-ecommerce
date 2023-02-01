'use strict'

let jwt = require('jwt-simple');
let moment = require('moment');
let secret = 'clave';       // Leerlo de un txt

exports.createToken = function(user){
    let payload = {
        sub: user._id,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        iat: moment().unix(),                       // Generation Date
        exp: moment().add(7, 'days').unix()         // Expiring date
    }

    return jwt.encode(payload, secret);
}
