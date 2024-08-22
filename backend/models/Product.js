// models/Product.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  img: { type: String, required: true },
  img2: { type: String },
  category: { type: String, required: true },
  oldPrice: { type: Number, required: true },
  price: { type: Number, required: true },
  sale: { type: Number },
  isSale: { type: Boolean, required: true },
  isFeatured: { type: Boolean, required: true },
  isTrending: { type: Boolean, required: true },
  colors: [{ type: String }],
  fittings: { type: String },
  size: [{ type: String }],
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;