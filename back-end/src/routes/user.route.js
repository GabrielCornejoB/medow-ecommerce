const { Router } = require('express');
const router = Router();
const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    const newUser = new userModel({email, password});
    await newUser.save();

    const token = jwt.sign({_id: newUser._id}, 'secret');
    res.status(200).json({token});
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({email: email});

    if (!user) return res.status(401).send("E-mail not registered");
    if (user.password != password) return res.status(401).send("Wrong password");

    const token = jwt.sign({_id: user._id}, 'secret');
    return res.status(200).json({token});
})

router.get('/tasks', (req, res) => {
    res.json([
        {
            _id: 1,
            name: "task 1",
            description: "lorem"
        },
        {
            _id: 2,
            name: "task 2",
            description: "lorem 2"
        },
        {
            _id: 3,
            name: "task 3",
            description: "lorem 3"
        }
    ])
})

router.get('/private-tasks', verifyToken, (req, res) => {
    res.json([
        {
            _id: 1,
            name: "task 1",
            description: "lorem uwu"
        },
        {
            _id: 2,
            name: "task 2",
            description: "lorem 2 uwu"
        },
        {
            _id: 3,
            name: "task 3",
            description: "lorem 3 uwu"
        }
    ])
})

module.exports = router;

function verifyToken(req, res, next) {
    if (!req.headers.authorization) return res.status(401).send('Unauthorized request');
    const token = req.headers.authorization.split(' ')[1];
    if (token == 'null') return res.status(401).send('Unauthorized request');

    const payload = jwt.verify(token, 'secret');
    req.userId = payload._id;
    next();
}
