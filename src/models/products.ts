import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { ProductBodyInterface, ProductInterface } from '../interfaces/products';

export default class ProductModel {
  constructor(public name: string, public amount: string) {
    this.name = name;
    this.amount = amount;
  }

  async registerProduct(product: ProductBodyInterface): Promise<ProductInterface> {
    const [{ insertId }] = await connection
      .execute<ResultSetHeader>(`INSERT INTO Trybesmith.Products
    (name, amount) VALUES (?, ?)`, [product.name, product.amount]);
    return ({
      id: insertId,
      name: this.name,
      amount: this.amount,
    });
  }

  async getAllProducts() {
    console.log(this.name);
    const [products] = await connection.execute(
      'SELECT id, name, amount, orderId FROM Trybesmith.Products',
    );
    return products;
  }
}