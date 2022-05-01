import { Component, EventEmitter, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  product: Product = new Product
  wardrobe: string[] = ['clothing', 'underwear', 'shoes', 'accessories']
  accessories: string[] = ['jewellery', 'glasses and frames', 'handbags and wallets']
  genders: string[] = ['male', 'female', 'unisex']
  clothingSizes: string[] = ['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']
  shoesSizes: string[] = ['36', '37', '38', '39', '40']
  colors: string[] = ['white', 'black', 'gray', 'blue', 'green', 'red', 'pink', 'gold']

  constructor(private pr: ProductsService,
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      this.product.category = params['category']
      this.product.gender = params['gender']
      this.product.color = params['color']
      this.product.price = +params['price']
      this.product.clothingSize = params['clothingSize']
      this.product.shoesSize = params['shoesSize']
      if (
          this.product.category || 
          this.product.gender || 
          this.product.color || 
          this.product.price||
          this.product.clothingSize||
          this.product.shoesSize
          ) {
        this.filter()
      }
    })
  }

  ngOnInit(): void { }

  filter() {
    this.pr.filter(this.product.category,
      this.product.gender,
      this.product.color,
      this.product.price
      )
  }
}

