import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentloginService } from 'src/services/studentlogin.service';

@Injectable({
  providedIn: 'root'
})
export class StudentGuardGuard implements CanActivate {
  constructor(private studentloginService:StudentloginService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let roleId = this.studentloginService.getToken()?.profile?.role;
      console.debug(roleId);
      if(roleId)
         return roleId > 0;
       else
         return false;
 }
  
}
