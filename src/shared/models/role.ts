import { Action } from './action';

export interface Role {
  _id: number;
  name: string;
  actions: Array<Action>;
}
