const { Schema, model } =  require('mongoose');

const productSchema = new Schema({
    description: String,
    category: String,
    imageURL: String,
    price: Number
},
{
    timestamps: true
});

module.exports = model('Product', productSchema);