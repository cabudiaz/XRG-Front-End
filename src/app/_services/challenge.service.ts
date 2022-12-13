import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  constructor(private http: HttpClient) { }


  getChallengeCards (){
    return this.http.get(`${environment.apiUrl}/api/challenge/readChallengeCards`)
  }
}
