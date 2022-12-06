
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthStravaService {

  constructor(private http: HttpClient) { }


stravaAuth (){
  const credentials = {
    client_id: "71959",
    response_type:"code",
    redirect_uri : "http://localhost",
    approval_prompt: "force",
    scope:"read_all,profile:read_all,activity:read_all",

    }
  this.http.get(`http://www.strava.com/oauth/authorize`).subscribe({
    next:data =>{
      console.log(data);
      
    },
    error: error=>{
console.log(error);

    }
    
  })
}
}