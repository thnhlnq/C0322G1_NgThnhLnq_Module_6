import {Book} from './book';

export interface CartDetail {
  id?: number;
  quantity?: number;
  book?: Book;
}
