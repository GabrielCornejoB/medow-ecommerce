const { Router } = require('express');
const router = Router();
const productModel = require('../models/product.model');

router.get('/get-products', async (req, res) => {
    const products = await productModel.find();

    if (!products) return res.status(400).send("Empty collection");
    return res.status(200).json(products);
});

module.exports = router;