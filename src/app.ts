import express from 'express';
import ordersRouter from './routes/orders';
import productRouter from './routes/product';
import userRouter from './routes/users';
import loginRouter from './routes/login';

const app = express();

app.use(express.json());
app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', ordersRouter);
app.use('/login', loginRouter);

export default app;
