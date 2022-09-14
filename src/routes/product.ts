import express from 'express';
import ProductController from '../controllers/products';

const productRouter = express.Router();

productRouter.post('/', async (req, res) => {
  const { name, amount } = req.body;
  const productController = new ProductController(name, amount);
  await productController.registerProduct(req, res);
});

export default productRouter;