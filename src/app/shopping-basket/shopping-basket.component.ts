import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.css']
})
export class ShoppingBasketComponent implements OnInit {

  products: Product[]
  constructor(private pr: ProductsService) { }

  ngOnInit() {
    this.addProductToBasket()
  }

  addProductToBasket() {
    let ps
    let data: Product[] = []
    if (ps = localStorage.getItem('products')) {
      ps = JSON.parse(ps)
      ps.forEach((id: any) => {
        this.pr.products.forEach((product: any) => {
          if (product.id == id) {
            data.push(product)
          }
        })
      });
      this.products = data
    }
    window.onstorage = (event) => {
      let id: any = event.newValue
      this.pr.products.forEach((product: any) => {
        if (product.id == id) {
          data.push(product)
        }
      })
    };
  }



}
