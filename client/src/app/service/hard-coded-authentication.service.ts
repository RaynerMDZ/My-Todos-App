import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HardCodedAuthenticationService {

  constructor() { }

  public authenticate(username, password) {

    // console.log('before = ' + this.isUserLoggedIn());

    if (username === 'in28minutes' && password === 'dummy' ) {
      sessionStorage.setItem('authenticatedUser', username);
      // console.log('after = ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  public isUserLoggedIn() {

    const user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  public logout() {
    const user = sessionStorage.removeItem('authenticatedUser');
    return !(user === null);
  }

}
