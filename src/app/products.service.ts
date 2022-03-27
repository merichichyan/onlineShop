import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public products: Product[] = [
    { id: 1, category: 'clothing', gender: 'male', clothingSize: 'm', color: 'black', price: 1000, title: 'Tishirt', description: 'description1', photo: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F17%2F4a%2F174a75bbe0e1af6dc97559c0a4456e00d9b63ca4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]' },
    { id: 2, category: 'jewellery', gender: 'female', color: 'gold', price: 100, title: 'Rings', description: 'description2', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQLN-1a60SUh3x3LJ-Z5JMclLKEprrRpVEyA&usqp=CAU' },
    { id: 3, category: 'clothing', gender: 'unisex', clothingSize: 'xl', color: 'gray', price: 250, title: 'Shirt', description: 'description3', photo: 'https://cdn.clothingshoponline.com/cdn-cgi/image/quality=80,w=824,f=auto/images/content/home/mobile/background.jpg' },
    { id: 4, category: 'shoes', gender: 'unisex', shoesSize: '38', color: 'blue', price: 1750, title: 'Nike Air', description: 'description4', photo: 'https://5.imimg.com/data5/ANDROID/Default/2021/8/UR/IO/IT/54132075/product-jpeg-500x500.jpg' },
    { id: 5, category: 'accessories', gender: 'female', color: 'green', price: 170, title: 'Earring', description: 'description5', photo: 'https://i.pinimg.com/564x/29/19/cd/2919cdb01c26ae076d01c41ebafd8074.jpg' },
  ]
  selectedProduct: any;
  addedProducts:number[]=[]
  constructor(private messageService: MessageService) {  }

  filter(category: string = '', gender: string = '', color: string = '', price: number = 0) {
    let newProduct: any
    newProduct = this.products.filter(product => {
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
    this.products = newProduct
  }


  getProduct(id: number): Observable<Product> {
    const product = this.products.find(p => p.id === id)!;
    this.messageService.add(`ProductService: fetched hero id=${id}`);
    return of(product);
  }

  addToBasket(id: number) {
    let product = this.products.find(function (p) {
      return (p.id == id)
    })
    if (product) {
      this.addedProducts.push(id)
      localStorage.setItem("products", JSON.stringify(this.addedProducts))
    } 

  }
}
