import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../model/category';
import {Discount} from '../model/discount';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get<any>(API_URL + '/book/discount');
  }

  findById(id: number): Observable<Discount> {
    return this.http.get<Discount>(`${API_URL}/book/discount/${id}`);
  }
}
