import {Customer} from './customer';

export interface Users {
  id?: number;
  username?: string;
  password?: string;
  status?: boolean;
  customer?: Customer;
}
