import jwt from 'jsonwebtoken';
import { UserInterface } from '../interfaces/users';
import UserModel from '../models/users';
import tokenInfos from '../util';

export default class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  async registerUser(user: UserInterface): Promise<string> {
    const id = await this.model.registerUser(user);
    const token = jwt.sign({ id }, tokenInfos.secret);
    return token;
  }

  async login(userData: UserInterface): Promise<string> {
    const { id } = await this.model.login(userData);
    const token = jwt.sign({ id }, tokenInfos.secret);
    return token;
  }
}