import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/_services/profile.service';
import { RouteService } from 'src/app/_services/route.service';

@Component({
  selector: 'app-routes-cards',
  templateUrl: './routes-cards.component.html',
  styleUrls: ['./routes-cards.component.scss']
})
export class RoutesCardsComponent implements OnInit {
  profile:any
  defaultAvatar: string = "/assets/img-nav/avatar-default-icon.jpg"
  routes:any
  constructor(
    private profileService: ProfileService,
    private routeService: RouteService
  ) { }

  ngOnInit(): void {
    this.getProfile();

    this.routeService.getRoutes().subscribe(
      {
        next: (data:any)=>{
          console.log(data);
          this.routes= data.res
                   
          
        },
        error:(error)=>{
          console.log(error);
          
        }
        
      });
      console.log(this.routes);

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
