import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Info } from './info';

@Injectable({providedIn:'root'})
export class ApiService {

  baseURL: string = "http://localhost:3000/";

  constructor(private http: HttpClient) {
  }

  sendDate(date:Info): Observable<Info> {
    const headers = { 'Content-Type': 'application/json'}
    const body=JSON.stringify(date);
    console.log(body)
    return this.http.post<Info>(this.baseURL + 'dates', body,{'headers':headers})
  }
}
