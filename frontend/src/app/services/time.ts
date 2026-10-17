import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TimeResponse {
  time: string;
  date: string;
  day: string;
}

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  private apiUrl = 'https://digital-clock-5zut.onrender.com/api/time/';

  constructor(private http: HttpClient) {}

  getCurrentTime(): Observable<TimeResponse> {
    return this.http.get<TimeResponse>(this.apiUrl);
  }
}