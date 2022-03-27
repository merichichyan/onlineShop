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
    let ps
    let data: Product[] = []
    if (ps = localStorage.getItem('products')) {
      ps = JSON.parse(ps)
      ps.forEach((id: any) => {
        this.pr.products.forEach(product => {
          if (product.id == id) {
            data.push(product)
          }
        })
      });

      this.products = data
    }
    window.onstorage = (event) => {
      let p: any = event.newValue
      this.products = JSON.parse(p)
    };
  }


}
