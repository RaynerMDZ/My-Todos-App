import { Component, OnInit } from '@angular/core';
import {HardCodedAuthenticationService} from '../service/hard-coded-authentication.service';

// @ts-ignore
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardCodedAuthenticationService: HardCodedAuthenticationService) { }

  ngOnInit() {
    this.hardCodedAuthenticationService.logout();
  }

}
