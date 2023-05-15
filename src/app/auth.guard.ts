import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { TokenService } from './service/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private tokenService: TokenService) {}
  isLogged=false

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.router.navigate(['/login']);
      this.isLogged = false;
    }
  }
  
}
