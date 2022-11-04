import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  constructor(private http: HttpClient) {
  }

  getStatisticByWeek(startDay, endDay): Observable<HttpEvent<any>> {
    return this.http.get<any>(`${API_URL}/statistic/by-week/${startDay}/${endDay}`);
  }

  getStatisticByMonth(startDay, endDay): Observable<HttpEvent<any>> {
    return this.http.get<any>(`${API_URL}/statistic/by-month/${startDay}/${endDay}`);
  }

  getStatisticByYear(startDay, endDay): Observable<HttpEvent<any>> {
    return this.http.get<any>(`${API_URL}/statistic/by-year/${startDay}/${endDay}`);
  }

  getStatisticByWeekCustomer(startDay, endDay): Observable<HttpEvent<any>> {
    return this.http.get<any>(`${API_URL}/statistic/by-week-customer/${startDay}/${endDay}`);
  }

  getStatisticByMonthCustomer(startDay, endDay): Observable<HttpEvent<any>> {
    return this.http.get<any>(`${API_URL}/statistic/by-month-customer/${startDay}/${endDay}`);
  }

  getStatisticByYearCustomer(startDay, endDay): Observable<HttpEvent<any>> {
    return this.http.get<any>(`${API_URL}/statistic/by-year-customer/${startDay}/${endDay}`);
  }
}
