import { Request, Response } from 'express';
import ProductService from '../services/products';
import { ProductBodyInterface, ProductInterface } from '../interfaces/products';
import StatusCode from '../statusCode/statusCode';

export default class ProductController {
  service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  async registerProduct(
    req: Request<unknown, unknown, ProductBodyInterface>,
    res: Response<ProductInterface>,
  ): Promise<void> {
    const { body } = req;
    const newProduct = await this.service.registerProduct(body);
    res.status(StatusCode.created).json(newProduct);
  }

  async getAllProducts(res: Response<ProductInterface[]>) {
    const products = await this.service.getAllProducts();
    res.status(StatusCode.ok).json(products);
  }
}