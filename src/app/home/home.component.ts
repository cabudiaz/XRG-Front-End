import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void {
    console.log("intro on Init Home");
    
    this.actRoute.queryParams.subscribe((params) => {
      console.log(params);
      this.authService.sendStravaData(params).subscribe({
        next: (data) => {
          console.log(data);

        },
        error: (error) => {
          console.log(error);

        }
      }).unsubscribe();

    })
  }

}
