import { Pool } from 'mysql2/promise';
import UserInterface from '../interfaces/users';
import connection from './connection';

export default class UserModel {
  connection: Pool;

  constructor() {
    this.connection = connection;
  }

  async registerUser(user: UserInterface): Promise<void> {
    await this.connection.execute(`
    INSERT INTO Trybesmith.User (username, classe, level, password)
    VALUES (?, ?, ?, ?)`, [user.username, user.classe, user.level, user.password]);
  }
}