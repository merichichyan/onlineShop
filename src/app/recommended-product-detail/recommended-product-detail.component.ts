import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recommended-product-detail',
  templateUrl: './recommended-product-detail.component.html',
  styleUrls: ['./recommended-product-detail.component.css']
})
export class RecommendedProductDetailComponent implements OnInit  {

  clothingSizes: string[] = ['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']
  shoesSizes: string[] = ['36', '37', '38', '39', '40']
  colors: string[] = ['white', 'black', 'gray', 'blue', 'green', 'red', 'pink', 'gold']
  @Input() product: Product;
  quantity:number=1;
  constructor(
    private route: ActivatedRoute,
    public pr: ProductsService,
    private location: Location
  ) { }
  
  ngOnInit(): void {
    this.getProduct()
  }


  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.pr.getProduct(id)
  }

  goBack(): void {
    this.location.back();
  }

  addToBasket(id: number) {
    if (!id)
      return
    this.pr.addToBasket(id)

  }

  toOrder(){
    alert('Your order has been accepted')
  }
}
