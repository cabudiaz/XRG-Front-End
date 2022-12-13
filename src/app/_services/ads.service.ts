import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor(private http: HttpClient) { }
  getAdsCards (){
    return this.http.get(`${environment.apiUrl}/api/ad/readAdCards`)
  }
}
