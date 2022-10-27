import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {CartDetail} from '../model/cart-detail';
import {Observable} from 'rxjs';
import {History} from '../model/history';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CartDetailService {

  constructor(private http: HttpClient) {
  }

  saveCartDetail(username: string, cartDetail: CartDetail[]) {
    return this.http.post(API_URL + '/book/saveCart/' + username, cartDetail);
  }

  getHistory(username: string): Observable<History> {
    return this.http.get<History>(API_URL + '/book/history/' + username);
  }
}
