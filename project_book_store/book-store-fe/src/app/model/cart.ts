import {Customer} from './customer';

export interface Cart {
  id?: number;
  createDate ? : string;
  status?: boolean;
  customer?: Customer;
}
