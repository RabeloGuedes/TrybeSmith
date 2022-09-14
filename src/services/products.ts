import { ProductBodyInterface, ProductInterface } from '../interfaces/products';
import ProductModel from '../models/products';

export default class ProductService {
  model: ProductModel;

  constructor() {
    this.model = new ProductModel();
  }

  async registerProduct(product: ProductBodyInterface): Promise<ProductInterface> {
    const newProduct = await this.model.registerProduct(product);
    return newProduct;
  }

  async getAllProducts(): Promise<ProductInterface[]> {
    const products = await this.model.getAllProducts();
    return products as ProductInterface[];
  }
}