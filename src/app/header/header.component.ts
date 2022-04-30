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
  filterArr: Product[] = []
  fValue: string = ''
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
    window.addEventListener('storage', () => {
      let p
      if(p = localStorage.getItem("products")){
        this.pr.addedProducts = JSON.parse(p)
      }
    });
  }

  applyFilter(event: any) {
    this.fValue = event.target.value
    this.pr.fProducts = this.pr.products.filter((product: any) => {
      return product.title.trim().toLowerCase().includes(this.fValue.trim().toLowerCase())
    })
  }

  clearSearch() {
    this.pr.addProducts().subscribe(data => {
      this.pr.products = data
    })
    this.value = ""
  }
}
