import express from 'express';
import OrdersController from '../controllers/orders';

const ordersRouter = express.Router();

const ordersController = new OrdersController();

ordersRouter.get('/', (_req, res) => ordersController.getAllOrders(res));

export default ordersRouter;