import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecommendedProductDetailComponent } from './recommended-product-detail/recommended-product-detail.component';
import { RecrecommendedProductsListComponent } from './recrecommended-products-list/recrecommended-products-list.component';
import { ShoppingBasketComponent } from './shopping-basket/shopping-basket.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: "list", component: RecrecommendedProductsListComponent },
  { path: 'detail/:id', component: RecommendedProductDetailComponent },
  { path: 'basket' , component:ShoppingBasketComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
