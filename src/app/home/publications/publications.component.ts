import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../_services/profile.service';
import { TokenStorageService } from '../../_services/token-storage.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {
  user:any
  profile:any
  defaultAvatar: string = "/assets/img-nav/avatar-default-icon.jpg"

  constructor(
    private profileService: ProfileService,
    private tokenService: TokenStorageService,
  ) { }

  ngOnInit(): void {
    this.user=this.tokenService.getUser();
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
