import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  signup(account: any) {
    console.log('Funciona este servicio');
    console.log(environment.apiUrl);
    return this.http.post(`${environment.apiUrl}/api/accounts/newAccount`, account);
  }

  sendStravaData (dataClient:any){
    return this.http.post(`${environment.apiUrl}/api/strava/updateDataStrava`, dataClient);
  }

  login(account: any) {
    return this.http.post(`${environment.apiUrl}/api/auth/login`, account);
  }
}
