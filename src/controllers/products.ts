import { Request, Response } from 'express';
import ProductService from '../services/products';
import { ProductBodyInterface, ProductInterface } from '../interfaces/products';
import StatusCode from '../statusCode/statusCode';

export default class ProductController {
  constructor(public name: string, public amount: string) {
    this.name = name;
    this.amount = amount;
  }

  service = new ProductService(this.name, this.amount);

  async registerProduct(
    req: Request<unknown, unknown, ProductBodyInterface>,
    res: Response<ProductInterface>,
  ) {
    const { body } = req;
    const newProduct = await this.service.registerProduct(body);
    res.status(StatusCode.created).json(newProduct);
  }
}