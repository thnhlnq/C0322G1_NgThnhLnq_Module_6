import {Category} from './category';

export interface Book {
  id?: number;
  code?: string;
  author?: string;
  description?: string;
  dimension?: string;
  image?: string;
  name?: string;
  price?: number;
  publisher?: string;
  quantity?: number;
  releaseDate?: string;
  totalPages?: number;
  translator?: string;
  status?: boolean;
  category?: Category;
}
