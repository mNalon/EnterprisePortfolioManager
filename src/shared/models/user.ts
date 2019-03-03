import { Role } from './role';

export interface User {
  _id: number;
  name: string;
  userName: string;
  role: Role;
  email: string;
}
