import express from 'express';
import ProductController from '../controllers/products';

const productRouter = express.Router();

const productController = new ProductController();

productRouter.post('/', (req, res) => productController.registerProduct(req, res));

export default productRouter;