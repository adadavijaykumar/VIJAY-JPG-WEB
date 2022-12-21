import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardsGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAuthorized(route);
  }

     isAuthorized(route: ActivatedRouteSnapshot ): boolean {
    const roles = ['Admin', 'Manager'];
    const expectedRoles = route.data['expectedRoles'];
    const roleMatches = roles.findIndex(role=> expectedRoles.indexof(role) !== -1);
    return roleMatches < 0 ? false:true;
  }
  
}
