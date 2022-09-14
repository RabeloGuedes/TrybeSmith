import { ResultSetHeader, Pool } from 'mysql2/promise';
import connection from './connection';
import { ProductBodyInterface, ProductInterface } from '../interfaces/products';

export default class ProductModel {
  connection: Pool;

  constructor() {
    this.connection = connection;
  }

  async registerProduct(product: ProductBodyInterface): Promise<ProductInterface> {
    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(`INSERT INTO Trybesmith.Products
    (name, amount) VALUES (?, ?)`, [product.name, product.amount]);
    return ({
      id: insertId,
      name: product.name,
      amount: product.amount,
    });
  }

  // async getAllProducts(): Promise<ProductInterface[]> {
  //   console.log(this.name);
  //   const [products] = await connection.execute(
  //     'SELECT id, name, amount, orderId FROM Trybesmith.Products',
  //   );
  //   return products as ProductInterface[];
  // }
}
