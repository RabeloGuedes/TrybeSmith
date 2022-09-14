import OrdersInterface from '../interfaces/orders';
import OrdersModel from '../models/orders';

export default class OrdersService {
  model: OrdersModel;

  constructor() {
    this.model = new OrdersModel();
  }

  async getAllOrders(): Promise<OrdersInterface[]> {
    const orders = await this.model.getAllOrders();
    return orders;
  }
}