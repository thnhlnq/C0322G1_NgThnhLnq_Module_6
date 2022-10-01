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

  getAll(): Observable<any> {
    return this.http.get<any>(API_URL + '/book');
  }

  save(book: Book): Observable<Book> {
    return this.http.post<Book>(API_URL + '/book/create', book);
  }

  findById(id: number): Observable<Book> {
    return this.http.get<Book>(`${API_URL}/book/${id}`);
  }

  delete(id: number): Observable<Book> {
    // @ts-ignore
    return this.http.patch<Book>(`${API_URL}/book/${id}`);
  }
}
