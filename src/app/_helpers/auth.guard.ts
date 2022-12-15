import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../_services/token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private tokenService: TokenStorageService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {  
      return new Promise((resolve, reject)=>{
        this.tokenService.verifyToken().subscribe({
          next: (data) => {
            /* console.log("dentro de next authguard"); */
            
            resolve(true);
          },
          error: (error) => {
            console.log("dentro del error");
            
            this.router.navigate(['/login']);
            
            
          }
        })
        
        
      }) 
      

    
    
  }
}