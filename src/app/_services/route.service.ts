import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private http: HttpClient) { }
  getRoutes (){
    return this.http.get(`${environment.apiUrl}/api/route/readRoutes`)
  }
}