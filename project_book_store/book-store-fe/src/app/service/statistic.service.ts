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

  getStatisticByWeek(starDay, endDay, type): Observable<HttpEvent<any>> {
    return this.http.get<any>(`${API_URL}/statistic/by-week/${starDay}/${endDay}/${type}`);
  }

  getStatisticByMonth(starDay, endDay, type): Observable<HttpEvent<any>> {
    return this.http.get<any>(`${API_URL}/statistic/by-month/${starDay}/${endDay}/${type}`);
  }

  getStatisticByYear(starDay, endDay, type): Observable<HttpEvent<any>> {
    return this.http.get<any>(`${API_URL}/statistic/by-year/${starDay}/${endDay}/${type}`);
  }

  getStatisticByWeekPublisher(starDay, endDay, type, publisher): Observable<HttpEvent<any>> {
    return this.http.get<any>(`${API_URL}/statistic/by-week-publisher/${starDay}/${endDay}/${type}/${publisher}`);
  }

  getStatisticByMonthPublisher(starDay, endDay, type, publisher): Observable<HttpEvent<any>> {
    return this.http.get<any>(`${API_URL}/statistic/by-month-publisher/${starDay}/${endDay}/${type}/${publisher}`);
  }

  getStatisticByYearPublisher(starDay, endDay, type, publisher): Observable<HttpEvent<any>> {
    return this.http.get<any>(`${API_URL}/statistic/by-year-publisher/${starDay}/${endDay}/${type}/${publisher}`);
  }
}
