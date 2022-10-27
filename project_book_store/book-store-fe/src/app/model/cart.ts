import {Customer} from './customer';
import {CartDetail} from './cart-detail';

export interface Cart {
  id?: number;
  createDate?: string;
  status?: boolean;
  customer?: Customer;
  cartDetails?: CartDetail[];
}
