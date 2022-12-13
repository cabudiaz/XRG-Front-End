import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { TokenStorageService } from './token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {headers = new HttpHeaders({
  token: this.tokenService.getToken!,
})

  constructor(private http: HttpClient,private tokenService: TokenStorageService) { }
  signup(account: any) {
    console.log('Funciona este servicio');
    console.log(environment.apiUrl);
    return this.http.post(`${environment.apiUrl}/api/accounts/newAccount`, account);
  }

  sendStravaData (dataClient:any){
    return this.http.post(`${environment.apiUrl}/api/strava/updateDataStrava`, dataClient,{headers:this.headers});
  }

  login(account: any) {
    return this.http.post(`${environment.apiUrl}/api/auth/login`, account);
  }
}
