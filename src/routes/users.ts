import express from 'express';
import UserController from '../controllers/users';

const userRouter = express.Router();

const userController = new UserController();

userRouter.post('/', (req, res) => userController.registerUser(req, res));

export default userRouter;