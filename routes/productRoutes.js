const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/api/v1/products', productController.createProduct);
router.get('/api/v1/products', productController.getAllProducts);
router.patch('/api/v1/products/:sku', productController.updateProduct);
router.delete('/api/v1/products/:sku', productController.deleteProduct);

module.exports = router;
