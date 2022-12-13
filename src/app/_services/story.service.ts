import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor(private http: HttpClient) { }
  getStories (){
    return this.http.get(`${environment.apiUrl}/api/story/readStories`)
  }
}
