import { Component } from '@angular/core';
import { Product } from './product';
import { ProductsService } from './products.service';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onlineShop';


  constructor(public pr: ProductsService, private u: UsersService) { }

  ngOnInit() {
  }
}
