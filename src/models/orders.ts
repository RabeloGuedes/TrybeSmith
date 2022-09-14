import { Pool, RowDataPacket } from 'mysql2/promise';
import OrdersInterface from '../interfaces/orders';
import connection from './connection';

export default class OrdersModel {
  connection: Pool;

  constructor() {
    this.connection = connection;
  }

  async getAllOrders(): Promise<OrdersInterface[]> {
    const [orders] = await this.connection.execute<RowDataPacket[]>(`
    SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.Orders AS o
    INNER JOIN Trybesmith.Products AS p
    ON o.id = p.orderId
    GROUP BY o.id
    ORDER BY userId ASC`);
    return orders as OrdersInterface[];
  }
}