import { Request, Response } from 'express';
import TokenInterface from '../interfaces/token';
import UserInterface from '../interfaces/users';
import UserService from '../services/users';
import StatusCode from '../statusCode/statusCode';

export default class UserController {
  service: UserService;

  constructor() {
    this.service = new UserService();
  }

  async registerUser(
    req: Request<unknown, unknown, UserInterface>,
    res: Response<TokenInterface>,
  ): Promise<void> {
    const { body } = req;
    const token = await this.service.registerUser(body);
    res.status(StatusCode.created).json({ token });
  }
}