import express from 'express';
import ProductController from '../controllers/products';

const productRouter = express.Router();

const productController = new ProductController();

productRouter.post('/', (req, res) => productController.registerProduct(req, res));
productRouter.get('/', (_req, res) => productController.getAllProducts(res));

export default productRouter;