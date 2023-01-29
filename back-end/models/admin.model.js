'use strict'

let mongoose = require('mongoose');

let schema = mongoose.Schema;
let adminSchema = schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true },
    dni: { type: String, required: true },
    role: { type: String, required: true },
    phone: { type: String, required: true}
});

module.exports = mongoose.model('admin', adminSchema);
