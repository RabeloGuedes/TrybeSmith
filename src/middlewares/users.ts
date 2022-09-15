import { Request, Response, NextFunction } from 'express';
import { UserBodyInterface } from '../interfaces/users';
import StatusCode from '../statusCode/statusCode';

export function isThereUsername(
  req: Request<unknown, unknown, UserBodyInterface>,
  res: Response<object>,
  next: NextFunction,
) {
  const { body } = req;
  if (!body.username) {
    return res.status(StatusCode.badRequest).json({ message: '"username" is required' });
  } next();
}

export function isUsernameTypeString(
  req: Request<unknown, unknown, UserBodyInterface>,
  res: Response<object>,
  next: NextFunction,
) {
  const { body } = req;
  if (typeof body.username !== 'string') {
    return res.status(StatusCode.unprocessabelEntity)
      .json({ message: '"username" must be a string' });
  } next();
}

export function isUsernameValid(
  req: Request<unknown, unknown, UserBodyInterface>,
  res: Response<object>,
  next: NextFunction,
) {
  const { body } = req;

  if (body.username.length < 3) {
    return res.status(StatusCode.unprocessabelEntity)
      .json({ message: '"username" length must be at least 3 characters long' });
  } next();
}

export function isThereClasse(
  req: Request<unknown, unknown, UserBodyInterface>,
  res: Response<object>,
  next: NextFunction,
) {
  const { body } = req;
  if (!body.classe) {
    return res.status(StatusCode.badRequest).json({ message: '"classe" is required' });
  } next();
}

export function isClasseTypeString(
  req: Request<unknown, unknown, UserBodyInterface>,
  res: Response<object>,
  next: NextFunction,
) {
  const { body } = req;
  if (typeof body.classe !== 'string') {
    return res.status(StatusCode.unprocessabelEntity)
      .json({ message: '"classe" must be a string' });
  } next();
}

export function isClasseValid(
  req: Request<unknown, unknown, UserBodyInterface>,
  res: Response<object>,
  next: NextFunction,
) {
  const { body } = req;

  if (body.classe.length < 3) {
    return res.status(StatusCode.unprocessabelEntity)
      .json({ message: '"classe" length must be at least 3 characters long' });
  } next(); 
}

export function isThereLevel(
  req: Request<unknown, unknown, UserBodyInterface>,
  res: Response<object>,
  next: NextFunction,
) {
  const { body } = req;
  if (body.level === undefined) {
    return res.status(StatusCode.badRequest).json({ message: '"level" is required' });
  } next();
}

export function isLevelTypeNumber(
  req: Request<unknown, unknown, UserBodyInterface>,
  res: Response<object>,
  next: NextFunction,
) {
  const { body } = req;
  if (typeof body.level !== 'number') {
    return res.status(StatusCode.unprocessabelEntity)
      .json({ message: '"level" must be a number' });
  } next();
}

export function isLevelValid(
  req: Request<unknown, unknown, UserBodyInterface>,
  res: Response<object>,
  next: NextFunction,
) {
  const { body } = req;
  if (body.level < 1) {
    return res.status(StatusCode.unprocessabelEntity)
      .json({ message: '"level" must be greater than or equal to 1' });
  } next(); 
}

export function isTherePassword(
  req: Request<unknown, unknown, UserBodyInterface>,
  res: Response<object>,
  next: NextFunction,
) {
  const { body } = req;
  if (!body.password) {
    return res.status(StatusCode.badRequest).json({ message: '"password" is required' });
  } next();
}

export function isPasswordTypeString(
  req: Request<unknown, unknown, UserBodyInterface>,
  res: Response<object>,
  next: NextFunction,
) {
  const { body } = req;
  if (typeof body.password !== 'string') {
    return res.status(StatusCode.unprocessabelEntity)
      .json({ message: '"password" must be a string' });
  } next();
}

export function isPasswordValid(
  req: Request<unknown, unknown, UserBodyInterface>,
  res: Response<object>,
  next: NextFunction,
) {
  const { body } = req;
  if (body.password.length < 8) {
    return res.status(StatusCode.unprocessabelEntity)
      .json({ message: '"password" length must be at least 8 characters long' });
  } next();
}