import {Customer} from './customer';

export interface Users {
  id?: number;
  email?: string;
  username?: string;
  password?: string;
  status?: boolean;
  customer?: Customer;
}
