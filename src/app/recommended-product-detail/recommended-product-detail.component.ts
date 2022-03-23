import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-recommended-product-detail',
  templateUrl: './recommended-product-detail.component.html',
  styleUrls: ['./recommended-product-detail.component.css']
})
export class RecommendedProductDetailComponent implements OnInit {

  @Input() product: Product
  constructor() { }

  ngOnInit(): void {
  }

}
