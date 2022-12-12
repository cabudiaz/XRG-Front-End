import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/_services/profile.service';

@Component({
  selector: 'app-routes-cards',
  templateUrl: './routes-cards.component.html',
  styleUrls: ['./routes-cards.component.scss']
})
export class RoutesCardsComponent implements OnInit {
  profile:any
  defaultAvatar: string = "/assets/img-nav/avatar-default-icon.jpg"
  constructor(
    private profileService: ProfileService,
  ) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile () {
    this.profileService.getProfile().subscribe ({
      next:(response:any)=>{
        this.profile = response.data
       console.log(response.data);
       
        
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
  }

}
