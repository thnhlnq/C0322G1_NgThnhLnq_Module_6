import {Users} from './users';
import {Cart} from './cart';

export interface Customer {
  id?: number;
  name?: string;
  address?: string;
  birthday?: string;
  gender?: string;
  phone?: string;
  status?: boolean;
  users?: Users;
  cart?: Cart;
}
