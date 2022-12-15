import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { ProfileService } from '../_services/profile.service';
import { TokenStorageService } from '../_services/token-storage.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user:any
  profile:any
  defaultAvatar: string = "/assets/img-nav/avatar-default-icon.jpg"
  constructor(
    private actRoute: ActivatedRoute, 
    private authService: AuthService, 
    private tokenService: TokenStorageService,
    private profileService: ProfileService,
     ) { }

  ngOnInit(): void {
  /*   console.log("intro on Init Home"); */
    this.user=this.tokenService.getUser();
    this.getProfile();
    
    this.actRoute.queryParams.subscribe((params) => {
      /* console.log(params); */
      this.authService.sendStravaData(params).subscribe({
        next: (data) => {
         /*  console.log(data); */

        },
        error: (error) => {
          console.log(error);

        }
      });

    })
  }
  getProfile () {
    this.profileService.getProfile().subscribe ({
      next:(response:any)=>{
        this.profile = response.data
       /* console.log(response.data); */
       
        
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
  }

}
// followfunct(){

// }