'use strict'

exports.sendMessage = function(text, req, res) {
    res.status(200).send({msg: text});
}