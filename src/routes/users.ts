import express from 'express';
import UserController from '../controllers/users';
import {
  isThereUsername,
  isUsernameTypeString,
  isUsernameValid,
  isThereClasse,
  isClasseTypeString,
  isClasseValid,
  isThereLevel,
  isLevelTypeNumber,
  isLevelValid,
  isTherePassword,
  isPasswordTypeString,
  isPasswordValid,
} from '../middlewares/users';

const userRouter = express.Router();

const userController = new UserController();

userRouter.post(
  '/',
  isThereUsername,
  isUsernameTypeString,
  isUsernameValid,
  isThereClasse,
  isClasseTypeString,
  isClasseValid,
  isThereLevel,
  isLevelTypeNumber,
  isLevelValid,
  isTherePassword,
  isPasswordTypeString,
  isPasswordValid,
  (req, res) => userController.registerUser(req, res),
);

export default userRouter;