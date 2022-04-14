import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable, startWith } from 'rxjs';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { RegistrationDialogComponent } from '../registration-dialog/registration-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  value = '';
  badgeNumber: number = 0
  filterArr: Product[] = []
  constructor(public dialog: MatDialog, public pr: ProductsService) { }

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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterArr = this.pr.products.filter(product => {
      return product.title.trim().toLowerCase().includes(filterValue.trim().toLowerCase())
    })
  }

  clearSearch() {
    this.filterArr = this.pr.products;
    this.value = ""    
  }


}
