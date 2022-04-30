import { Component, Input, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-recommended-product',
  templateUrl: './recommended-product.component.html',
  styleUrls: ['./recommended-product.component.css']
})
export class RecommendedProductComponent implements OnInit {
  @Input() product: Product;
  @Input() inShoppingBacket: boolean
  @Input() products: Product[]
  constructor(private pr: ProductsService) { }

  ngOnInit() {
  }

  deleteProductToBasket(id: number) {
    this.pr.products.forEach((product: any) => {
      if (product.id == id) {
        this.products = this.products.splice(this.products.indexOf(product), 1)

        let ps:any
        if (ps = localStorage.getItem('products')) {
          ps = JSON.parse(ps)
          ps.forEach((product: any) => {
            ps = ps.filter((i: any) => i != id);
          })                 
        }
        localStorage.setItem('products',JSON.stringify(ps))
      }
    });
  }

}

