import { Request, Response, NextFunction } from 'express';
import UserInterface from '../interfaces/users';
import StatusCode from '../statusCode/statusCode';
import UserModel from '../models/users';

const userModel = new UserModel();

export function isThereAUsername(req: Request<UserInterface>, res: Response, next: NextFunction) {
  const { body } = req;
  if (!body.username) {
    return res.status(StatusCode.badRequest).json({ message: '"username" is required' });
  } next();
}

export function isThereAPassword(req: Request<UserInterface>, res: Response, next: NextFunction) {
  const { body } = req;
  if (!body.password) {
    return res.status(StatusCode.badRequest).json({ message: '"password" is required' });
  } next();
}

export async function areTheCredentialsValid(
  req: Request<UserInterface>,
  res: Response,
  next: NextFunction,
) {
  const { body } = req;
  const user = await userModel.login(body);
  if (!user) {
    return res.status(StatusCode.unauthorized).json({ message: 'Username or password invalid' });
  } next();
}