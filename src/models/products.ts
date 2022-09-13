import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';

export default class ProductModel {
  name: string;

  amount: string;

  constructor(name: string, amount: string) {
    this.name = name;
    this.amount = amount;
  }

  async registerProduct() {
    const [{ insertId }] = await connection
      .execute<ResultSetHeader>(`INSERT INTO Trybesmith.Products
    (name, amount) VALUES (?, ?)`, [this.name, this.amount]);
    return ({
      id: insertId,
      name: this.name,
      amount: this.amount,
    });
  }
}