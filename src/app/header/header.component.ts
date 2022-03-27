import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { RegistrationDialogComponent } from '../registration-dialog/registration-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  badgeNumber: number = 0
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
      this.countBadge()
  }

  openRegistrationDialog() {
    this.dialog.open(RegistrationDialogComponent);
  }

  openLoginDialog() {
    this.dialog.open(LoginDialogComponent);
  }

  countBadge() {
    let ps
    let products
    if (ps = localStorage.getItem('products')) {
      products = JSON.parse(ps)
      this.badgeNumber = products.length
    }
    window.onstorage = (event) => {
      let p: any = event.newValue
      products = JSON.parse(p)
      this.badgeNumber = products.length
    };
  }
}
