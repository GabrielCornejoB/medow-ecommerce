const express = require('express');
const database = require('./database');

const app = express();
const port = process.env.PORT || 4201

app.use(express.json());
app.use('/api', require('./routes/user.route'));

app.listen(port);
console.log("Server started on port:", port)
