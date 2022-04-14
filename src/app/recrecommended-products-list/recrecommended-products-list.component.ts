import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-recrecommended-products-list',
  templateUrl: './recrecommended-products-list.component.html',
  styleUrls: ['./recrecommended-products-list.component.css']
})
export class RecrecommendedProductsListComponent implements OnInit {


  constructor(public pr:ProductsService) { }

  ngOnInit() {
  }

}
