import { Component, OnInit } from '@angular/core'
import { Page } from '@nativescript/core';


@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private page: Page) { }

  ngOnInit(): void {
    this.page.actionBarHidden = true;
  }
}
