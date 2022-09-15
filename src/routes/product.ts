import express from 'express';
import ProductController from '../controllers/products';
import {
  isThereName,
  isNameTypeString,
  isNameValid,
  isThereAmonut,
  isAmounTypeString,
  isAmountValid,
} from '../middlewares/products';

const productRouter = express.Router();

const productController = new ProductController();

productRouter.post(
  '/',
  isThereName,
  isNameTypeString,
  isNameValid,
  isThereAmonut,
  isThereAmonut,
  isAmounTypeString,
  isAmountValid,
  (req, res) => productController.registerProduct(req, res),
);
productRouter.get('/', (_req, res) => productController.getAllProducts(res));

export default productRouter;