import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-recommended-product',
  templateUrl: './recommended-product.component.html',
  styleUrls: ['./recommended-product.component.css']
})
export class RecommendedProductComponent implements OnInit {

 
  @Input() product: Product;
  constructor(private pr: ProductsService) { }

  ngOnInit() {
  }

  onSelected() {
    this.pr.productSelected.emit(this.product)
  }

}
