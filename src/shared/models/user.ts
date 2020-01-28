import { Role } from './role';

export interface User {
  _id: string;
  name: string;
  userName: string;
  role: Role;
  email: string;
  password: string;
}
