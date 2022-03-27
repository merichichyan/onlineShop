import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.css']
})
export class ShoppingBasketComponent implements OnInit {

  products: Product[]
  constructor() { }

  ngOnInit() {
    let ps
    if (ps = localStorage.getItem('products')) {
        this.products = JSON.parse(ps)
    } 
      window.onstorage = (event) => {
        let p: any = event.newValue
        this.products = JSON.parse(p)
      };
  }

 
}
