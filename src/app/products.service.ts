import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = []
  fProducts: Product[] = []
  selectedProduct: any;
  addedProducts: number[] = []

  constructor(
    private http: HttpClient,
    private location: Location,) {
    this.addProducts().subscribe(data => {
      this.products = data
      this.fProducts = data
      let p
      if (p = localStorage.getItem("products")) {
        this.addedProducts = JSON.parse(p)
      }
    })
  }

  filter(category: string = '', gender: string = '', color: string = '', price: number = 0,clothingSize='',shoesSize='') {
    let newProduct: any
    newProduct = this.products.filter((product: any) => {
      let valid = true
      if (category) {
        valid = valid && product.category === category
      }
      if (gender) {
        valid = valid && product.gender === gender
      }
      if (color) {
        valid = valid && product.color === color
      }
      if (price) {
        valid = valid && product.price === price
      }
      return valid
    })
    this.fProducts = newProduct

    const params = new URLSearchParams({
      'category': category,
      'gender': gender,
      'color': color,
      'price': price + '',
      'clothingSize': clothingSize,
      'shoesSize': shoesSize
    });
    const url = `list?${params.toString()}`;
    this.location.go(url);
  }

  addProducts(): Observable<any> {
    return this.http.get("/assets/mock/products.json")
  }

  getProduct(id: number): Product {
    let product: Product = this.products.find((p: Product) => p.id === id)!;
    return product
  }

  addToBasket(id: number) {
    let product = this.products.find(function (p: any) {
      return (p.id == id)
    })
    if (product) {
      this.addedProducts.push(id)
      localStorage.removeItem("products")
      localStorage.setItem("products", JSON.stringify(this.addedProducts))
    }
  }

}
