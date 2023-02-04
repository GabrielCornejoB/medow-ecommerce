const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/medow', {useNewUrlParser: true, useUnifiedTopology: true}, (err, res) => {
    if (err) console.log(err);
    else console.log("Connected to DB");
});
