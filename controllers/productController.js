const Product = require('../models/productModel');

// ✅ สร้างสินค้าใหม่
exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      message: 'Product created successfully',
      data: product
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ✅ ดึงสินค้าทั้งหมด
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ error: 'No products found' });
  }
};

// ✅ ดึงสินค้าตาม SKU
exports.getProductBySku = async (req, res) => {
  try {
    const product = await Product.findOne({ sku: req.params.sku });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ✅ แก้ไขสินค้าโดยใช้ SKU
exports.updateProduct = async (req, res) => {
  try {
    const updated = await Product.findOneAndUpdate(
      { sku: req.params.sku },
      req.body,
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json({
      message: 'Product updated successfully',
      data: updated
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ✅ ลบสินค้าโดยใช้ SKU
exports.deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findOneAndDelete({ sku: req.params.sku });
    if (!deleted) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
