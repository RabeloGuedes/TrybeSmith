import { Response } from 'express';
import OrdersInterface from '../interfaces/orders';
import OrdersService from '../services/orders';
import StatusCode from '../statusCode/statusCode';

export default class OrdersController {
  service: OrdersService;

  constructor() {
    this.service = new OrdersService();
  }

  async getAllOrders(res: Response<OrdersInterface[]>) {
    const orders = await this.service.getAllOrders();
    res.status(StatusCode.ok).json(orders);
  }
}