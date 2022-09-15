import { Request, Response, NextFunction } from 'express';
import { UserInterface } from '../interfaces/users';
import StatusCode from '../statusCode/statusCode';
import UserModel from '../models/users';

const userModel = new UserModel();

export function isThereUsername(
  req: Request<unknown, unknown, UserInterface>,
  res: Response<object>,
  next: NextFunction,
) {
  const { body } = req;
  if (!body.username) {
    return res.status(StatusCode.badRequest).json({ message: '"username" is required' });
  } next();
}

export function isTherePassword(
  req: Request<unknown, unknown, UserInterface>,
  res: Response<object>,
  next: NextFunction,
) {
  const { body } = req;
  if (!body.password) {
    return res.status(StatusCode.badRequest).json({ message: '"password" is required' });
  } next();
}

export async function areTheCredentialsValid(
  req: Request<unknown, unknown, UserInterface>,
  res: Response<object>,
  next: NextFunction,
) {
  const { body } = req;
  const user = await userModel.login(body);
  if (!user) {
    return res.status(StatusCode.unauthorized).json({ message: 'Username or password invalid' });
  } next();
}