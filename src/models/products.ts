import { ResultSetHeader, Pool, RowDataPacket } from 'mysql2/promise';
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

  async getAllProducts(): Promise<ProductInterface[]> {
    const [products] = await this.connection.execute<RowDataPacket[]>(
      'SELECT id, name, amount, orderId FROM Trybesmith.Products',
    );
    return products as ProductInterface[];
  }
}
