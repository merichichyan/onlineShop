import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  product: Product = new Product
  name: any
  wardrobe: string[] = ['clothing', 'underwear', 'shoes', 'accessories']
  accessories: string[] = ['jewellery', 'glasses and frames', 'handbags and wallets']
  genders: string[] = ['male', 'female', 'unisex']
  clothingSizes: string[] = ['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']
  shoesSizes: string[] = ['36', '37', '38', '39', '40']
  colors: string[] = ['white', 'black', 'gray', 'blue', 'green', 'red', 'pink','gold']
  @Output() updateItemsEvent: EventEmitter<Product[]> = new EventEmitter<Product[]>();

  constructor(private pr: ProductsService) {
  }

  ngOnInit(): void {
    
  }

  filter() {
    this.pr.filter(this.product.category,this.product.gender,this.product.color,this.product.price)
    this.updateItemsEvent.emit(this.pr.products);
  }

}
