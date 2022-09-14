import { RowDataPacket } from 'mysql2/promise';

export default interface LoginResponseInterface extends RowDataPacket {
  id: number;
}