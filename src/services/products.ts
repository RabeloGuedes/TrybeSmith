import { ProductBodyInterface } from '../interfaces/products';
import ProductModel from '../models/products';

export default class ProductService {
  constructor(public name: string, public amount: string) {
    this.name = name;
    this.amount = amount;
  }

  model = new ProductModel(this.name, this.amount);

  async registerProduct(product: ProductBodyInterface) {
    const newProduct = await this.model.registerProduct(product);
    return newProduct;
  }

  async getAllProducts() {
    console.log(this.name);
    const products = await this.model.getAllProducts();
    return products;
  }
}