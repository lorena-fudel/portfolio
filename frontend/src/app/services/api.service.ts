import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = '/api';

  constructor(private http: HttpClient) { }

  getTechnologies(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/technologies`);
  }

  getExperiences(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/experiences`);
  }

  getGoals(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/goals`);
  }

  sendMessage(contactData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/contact`, contactData);
  }
}
