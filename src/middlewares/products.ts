import { Request, Response, NextFunction } from 'express';
import { ProductBodyInterface } from '../interfaces/products';
import StatusCode from '../statusCode/statusCode';

export function isThereName(
  req: Request<unknown, unknown, ProductBodyInterface>,
  res: Response<object>,
  next: NextFunction,
) {
  const { body } = req;
  if (!body.name) {
    return res.status(StatusCode.badRequest).json({ message: '"name" is required' });
  } next();
}

export function isNameTypeString(
  req: Request<unknown, unknown, ProductBodyInterface>,
  res: Response<object>,
  next: NextFunction,
) {
  const { body } = req;
  if (typeof body.name !== 'string') {
    return res.status(StatusCode.unprocessabelEntity).json({ message: '"name" must be a string' });
  } next();
}

export function isNameValid(
  req: Request<unknown, unknown, ProductBodyInterface>,
  res: Response<object>,
  next: NextFunction,
) {
  const { body } = req;
  if (body.name.length < 3) {
    return res.status(StatusCode.unprocessabelEntity)
      .json({ message: '"name" length must be at least 3 characters long' });
  } next();
}

export function isThereAmonut(
  req: Request<unknown, unknown, ProductBodyInterface>,
  res: Response<object>,
  next: NextFunction,
) {
  const { body } = req;
  if (!body.amount) {
    return res.status(StatusCode.badRequest).json({ message: '"amount" is required' });
  } next();
}

export function isAmounTypeString(
  req: Request<unknown, unknown, ProductBodyInterface>,
  res: Response<object>,
  next: NextFunction,
) {
  const { body } = req;
  if (typeof body.amount !== 'string') {
    return res.status(StatusCode.unprocessabelEntity)
      .json({ message: '"amount" must be a string' });
  } next();
}

export function isAmountValid(
  req: Request<unknown, unknown, ProductBodyInterface>,
  res: Response<object>,
  next: NextFunction,
) {
  const { body } = req;
  if (body.amount.length < 3) {
    return res.status(StatusCode.unprocessabelEntity)
      .json({ message: '"amount" length must be at least 3 characters long' });
  } next();
}