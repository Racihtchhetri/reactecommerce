// routes/productRoutes.js

const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // Assuming you have a Product model

// POST endpoint to add a new product
router.post('/products', async (req, res) => {
  const {
    id,
    title,
    img,
    img2,
    category,
    oldPrice,
    price,
    sale,
    isSale,
    isFeatured,
    isTrending,
    colors,
    fittings,
    size,
  } = req.body;

  try {
    const newProduct = new Product({
      id,
      title,
      img,
      img2,
      category,
      oldPrice,
      price: isSale ? (oldPrice * (1 - sale / 100)).toFixed(2) : price,
      sale: isSale ? sale : 0,
      isSale,
      isFeatured,
      isTrending,
      colors,
      fittings,
      size,
    });

    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully.' });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ message: 'Failed to add product.' });
  }
});

module.exports = router;
