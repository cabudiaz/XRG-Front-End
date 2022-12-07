import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  googleBtnText = 'signin_with';

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService, 
    private tokenService: TokenStorageService, 
    private router: Router) { }

  form = this.fb.group ({
    email:['', Validators.required],
    password:['', Validators.required]
  })

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('OnSubmit Works');
    console.log(this.form.value);

    if(this.form.valid) {
      this.authService.login(this.form.value).subscribe({
        next: (data:any) => {
        
          
          console.log(data.token);
          this.tokenService.saveToken(data.token)

          this.router.navigate(['/'])
        },
        error: (err) => {
          console.log(err);
          
        },
      })
    }else {
      console.log("NO valido");
      
    }
    
  }

}
