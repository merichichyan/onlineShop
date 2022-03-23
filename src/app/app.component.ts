import { Component } from '@angular/core';
import { Product } from './product';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onlineShop';

  selectedProduct: Product | undefined;

  constructor(public pr: ProductsService) { }

  ngOnInit() {
    this.pr.productSelected.subscribe(
      (product: Product) => {
        this.selectedProduct = product;
      }
    );
  }
}
