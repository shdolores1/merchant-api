import * as express from "express";
import * as ProductController from "../controllers/product";
const productRouter = express.Router();

// Get all Products
productRouter.get('/api/product/', ProductController.getAllProducts);

// Get Product by ID
productRouter.get('/api/product/:id', ProductController.getProductByID);

// Create Product
productRouter.post('/api/product', ProductController.createProduct);

// Update Product
productRouter.patch('/api/product/:id', ProductController.updateProduct);

// Delete Product
productRouter.delete('/api/product/:id', ProductController.deleteProduct);

export { productRouter }