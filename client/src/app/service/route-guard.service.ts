import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {HardCodedAuthenticationService} from './hard-coded-authentication.service';

@Injectable({
  providedIn: 'root'
})

export class RouteGuardService implements CanActivate {

  // Dependency Injection.
  constructor(private hardCodedAuthenticationService: HardCodedAuthenticationService, private router: Router) { }

  // Checks if a user is logged in to show specific pages.
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.hardCodedAuthenticationService.isUserLoggedIn()) {
      // If is logged in then the user can see all pages.
      return true;
    }
    // Sends back to login when a different page is typed.
    this.router.navigate(['login']);
    // If is not logged in, then the user can only see the login page.
    return false;
  }

}
