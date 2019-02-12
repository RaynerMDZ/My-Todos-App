import { Component, OnInit } from '@angular/core';
import {HardCodedAuthenticationService} from '../service/hard-coded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  brand: string = 'Todos App';
  // isUserLoggedIn: boolean = false;

  constructor(public hardCodedAuthenticationService: HardCodedAuthenticationService) { }

  ngOnInit() {
    // this.isUserLoggedIn = this.hardCodedAuthenticationService.isUserLoggedIn();
  }

}
