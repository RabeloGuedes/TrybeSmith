import express from 'express';
import UserController from '../controllers/users';

const loginRouter = express.Router();

const userController = new UserController();

loginRouter.post('/', (req, res) => userController.login(req, res));

export default loginRouter;
