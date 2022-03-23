import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-recrecommended-products-list',
  templateUrl: './recrecommended-products-list.component.html',
  styleUrls: ['./recrecommended-products-list.component.css']
})
export class RecrecommendedProductsListComponent implements OnInit {

  products: Product[];

  constructor(private pr:ProductsService) { }

  ngOnInit() {
    this.products=this.pr.products
  }

}
