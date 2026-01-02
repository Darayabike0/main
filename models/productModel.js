const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  sku: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  category: String,
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  description: String,
  image_url: String
});

module.exports = mongoose.model('Product', productSchema);
