import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { RegistrationDialogComponent } from '../registration-dialog/registration-dialog.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  value = '';
  filterArr: Product[] = []
  fValue: string = ''
  constructor(
              private dialog: MatDialog, 
              public pr: ProductsService,
              private location: Location,
              private route: ActivatedRoute
              ) { 
                this.route.queryParams.subscribe(params => {
                  this.fValue = params['q']
                  if(this.fValue){
                    this.search()
                  }
                })
            }

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

  search(event: any = null): any{
    this.pr.fProducts = this.pr.products.filter((product: Product) => {
      return product.title.trim().toLowerCase().includes(this.fValue.trim().toLowerCase())
    })
    const params = new URLSearchParams({ q: this.fValue});
    const url = `list?${params.toString()}`;
    this.location.go(url);
    
  }

  clearSearch() {
    this.pr.addProducts().subscribe(data => {
      this.pr.products = data
    })
    this.value = ""
  }
}
