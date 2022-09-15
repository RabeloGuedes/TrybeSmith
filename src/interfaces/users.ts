export interface UserInterface {
  id?: number;
  username: string;
  classe?: string;
  level?: number;
  password: string;
}
export interface UserBodyInterface {
  username: string;
  classe: string;
  level: number;
  password: string;
}