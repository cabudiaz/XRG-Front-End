import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/_services/profile.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user:any 
  constructor(
    private tokenService: TokenStorageService,
    private router: Router,
    private profileService: ProfileService
    ) { }

  ngOnInit(): void {
    this.user = this.tokenService.getUser();
    
  }
  logout(): void {
    this.tokenService.logout();
    this.router.navigate(['/login']);
  }

  changePhoto (e:any) {
    console.log("Hello");
    const file = e.target.files[0] ;
    const formData = new FormData() ;

    formData.append('photo', file);
    this.profileService.uploadPhotoProfile(formData).subscribe({
      next: (data)=> {
        console.log(data);
        
      },
      error: (error) => {
        console.log(error);
        
      }
    })
    
  }


}
