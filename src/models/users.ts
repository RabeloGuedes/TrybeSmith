import { Pool, ResultSetHeader } from 'mysql2/promise';
import LoginResponseInterface from '../interfaces/login';
import UserInterface from '../interfaces/users';
import connection from './connection';

export default class UserModel {
  connection: Pool;

  constructor() {
    this.connection = connection;
  }

  async registerUser(user: UserInterface): Promise<number> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.Users (username, classe, level, password)
    VALUES (?, ?, ?, ?)`, [user.username, user.classe, user.level, user.password]);
    return insertId;
  }

  async login(userData: UserInterface): Promise<LoginResponseInterface> {
    const [user] = await this.connection.execute<LoginResponseInterface[]>(`
    SELECT id FROM Trybesmith.Users WHERE username = ? AND password = ?
    `, [userData.username, userData.password]);
    return user[0];
  }
}