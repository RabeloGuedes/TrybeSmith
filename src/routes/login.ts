import express from 'express';
import UserController from '../controllers/users';
import {
  isThereAUsername,
  isThereAPassword,
  areTheCredentialsValid,
} from '../middlewares/login';

const loginRouter = express.Router();

const userController = new UserController();

loginRouter.post(
  '/',
  isThereAUsername,
  isThereAPassword,
  areTheCredentialsValid,
  (req, res) => userController.login(req, res),
);

export default loginRouter;
