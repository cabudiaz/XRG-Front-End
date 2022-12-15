import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-google-button',
  templateUrl: './google-button.component.html',
  styleUrls: ['./google-button.component.scss']
})
export class GoogleButtonComponent implements OnInit {
  @Input('googleBtnText') googleBtnText: any = '';
  constructor(private socialAuthService: SocialAuthService, private authService: AuthService, private tokenService: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user: any) => {
      if (user) {
        user.password = user.id;
        this.authService.googleLogin(user).subscribe({
          next: (data: any) => {
            // this.socialAuthService.signOut();
            console.log('into google login')
            this.tokenService.saveToken(data.token);
            this.router.navigate(['/']).then(() => {
              window.location.reload();
            });
          }, error: (err) => {
            console.log(err);
          },
        });
      } else {
        console.log("formulario no invalido");

      }
      //  console.log(user);

    });
  }
}


