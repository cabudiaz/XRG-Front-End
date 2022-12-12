import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../_services/profile.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {

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
