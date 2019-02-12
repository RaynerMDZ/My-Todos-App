import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HardCodedAuthenticationService} from '../service/hard-coded-authentication.service';
import {BasicAuthenticationService} from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username = '';
  password = '';
  errorMessage = 'Invalid credentials';
  invalidLogin = false;

  constructor(private basicAuthenticationService: BasicAuthenticationService,
              private router: Router,
              private hardCodedAuthenticationService: HardCodedAuthenticationService) { }

  ngOnInit() {
  }

  private handleLogin(): void {

    if (this.hardCodedAuthenticationService.authenticate(this.username, this.password)) {

      //Redirect to Welcome page.
      this.router.navigate(['welcome', this.username]);

      this.invalidLogin = false;

    } else {
      this.invalidLogin = true;
    }
  }

  handleBasicAuthLogin(): void {

    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['welcome', this.username]);
          this.invalidLogin = false;
        },

        error => {
          console.log(error);
          this.invalidLogin = true;
        }
    );
  }

  handleJWTAuthLogin(): void {

    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          //console.log(data);
          this.router.navigate(['welcome', this.username]);
          this.invalidLogin = false;
        },

        error => {
          console.log(error);
          this.invalidLogin = true;
        }
      );
  }
}
