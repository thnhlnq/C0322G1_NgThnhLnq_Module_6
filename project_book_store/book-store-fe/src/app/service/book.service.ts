import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../model/book';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }

  getList(): Observable<Book[]> {
    return this.http.get<Book[]>(API_URL + '/book');
  }

  getAll(page: number, category: string, name: string, author: string, size: number): Observable<Book[]> {
    return this.http.get<Book[]>(API_URL + '/book/search?page=' + page + '&keyCategory=' + category + '&keyName=' + name + '&keyAuthor=' + author + '&size=' + size);
  }

  save(book: Book): Observable<Book> {
    return this.http.post<Book>(API_URL + '/book/create', book);
  }

  findById(id: number): Observable<Book> {
    return this.http.get<Book>(`${API_URL}/book/${id}`);
  }

  edit(id: number, book: Book): Observable<Book> {
    return this.http.put<Book>(`${API_URL}/book/edit/${id}`, book);
  }

  delete(id: number): Observable<Book> {
    // @ts-ignore
    return this.http.patch<Book>(`${API_URL}/book/${id}`);
  }

  getCart() {
    const cartJson = sessionStorage.getItem('cart');
    if (cartJson) {
      return JSON.parse(cartJson);
    } else {
      return [];
    }
  }

  getBestSeller(): Observable<Book[]> {
    return this.http.get<Book[]>(API_URL + '/book/best-seller');
  }
}
