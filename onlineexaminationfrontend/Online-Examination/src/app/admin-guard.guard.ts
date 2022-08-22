import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

   constructor(private loginService:LoginService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       let roleId = this.loginService.getToken()?.profile?.role;
       console.debug(roleId);
       if(roleId)
          return roleId > 0;
        else
          return false;
  }
  
}
