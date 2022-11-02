import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';
import {Users} from '../model/users';
import {Book} from '../model/book';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getCustomer(username: string): Observable<Customer> {
    // @ts-ignore
    return this.http.post<Customer>(`${API_URL}/book/` + username);
  }

  getAll(): Observable<Users> {
    return this.http.get<Users>(`${API_URL}/book/users`);
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(API_URL + '/customer/create', customer);
  }
}
