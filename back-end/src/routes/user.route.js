const { Router } = require('express');
const router = Router();
const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
    const { email, password, name, lastName } = req.body;

    const userExists = await userModel.findOne({email: email});
    if(userExists) return res.status(400).send("E-mail already registered");

    const newUser = new userModel({email, password, name, lastName});
    await newUser.save();

    const token = jwt.sign({_id: newUser._id}, 'secret');
    res.status(200).json({token});
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({email: email});

    if (!user) return res.status(400).send("E-mail not registered");
    if (user.password != password) return res.status(400).send("Wrong password");

    const token = jwt.sign({_id: user._id}, 'secret');
    return res.status(200).json({token});
})

// router.get('/private-tasks', verifyToken, (req, res) => {}

module.exports = router;

function verifyToken(req, res, next) {
    if (!req.headers.authorization) return res.status(401).send('Unauthorized request');
    const token = req.headers.authorization.split(' ')[1];
    if (token == 'null') return res.status(401).send('Unauthorized request');

    const payload = jwt.verify(token, 'secret');
    req.userId = payload._id;
    next();
}
