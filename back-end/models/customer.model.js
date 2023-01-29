'use strict'

let mongoose = require('mongoose');

let schema = mongoose.Schema;
let customerSchema = schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true},
    country: { type: String, required: false},
    email: { type: String, required: true},
    password: { type: String, required: true },
    profile: { type: String, default: 'profile.png', required: true },
    phone: { type: String, required: false },
    gender: { type: String, required: false },
    dateOfBirth: { type: String, required: false },
    dni: { type: String, required: false}
});

module.exports = mongoose.model('customer', customerSchema);
