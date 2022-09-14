import { Pool, ResultSetHeader } from 'mysql2/promise';
import UserInterface from '../interfaces/users';
import connection from './connection';

export default class UserModel {
  connection: Pool;

  constructor() {
    this.connection = connection;
  }

  async registerUser(user: UserInterface): Promise<number> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.User (username, classe, level, password)
    VALUES (?, ?, ?, ?)`, [user.username, user.classe, user.level, user.password]);
    return insertId;
  }
}