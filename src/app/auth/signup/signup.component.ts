import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  googleBtnText='signup_with';

  constructor(
    private fb: FormBuilder, private authService: AuthService, private router: Router, private tokenService: TokenStorageService) { }

  form = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]

  })

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.form.valid) {
      console.log("Form Valido");
      console.log(this.form.value);
      this.authService.signup(this.form.value).subscribe({
        next: (data:any) => {
          console.log(data.token);
          this.tokenService.saveToken(data.token)
          console.log(data);
          window.location.href = "http://www.strava.com/oauth/authorize?client_id=71959&response_type=code&redirect_uri=http://localhost:4200&approval_prompt=force&scope=read_all,profile:read_all,activity:read_all"

/*           this.router.navigate(['../login'])*/
         },
        error: err => {
          console.log(err);

        }
      });
    } else {
      console.log("Form Invalido");

    }



  }

}
