import express from 'express';
import UserController from '../controllers/users';
import {
  isThereUsername,
  isTherePassword,
  areTheCredentialsValid,
} from '../middlewares/login';

const loginRouter = express.Router();

const userController = new UserController();

loginRouter.post(
  '/',
  isThereUsername,
  isTherePassword,
  areTheCredentialsValid,
  (req, res) => userController.login(req, res),
);

export default loginRouter;
