import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RegistrationDialogComponent } from './registration-dialog/registration-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FilterComponent } from './filter/filter.component';
import { RecommendedProductComponent } from './recommended-product/recommended-product.component';
import { RecommendedProductDetailComponent } from './recommended-product-detail/recommended-product-detail.component';
import { MatIconModule } from '@angular/material/icon';
import { RecrecommendedProductsListComponent } from './recrecommended-products-list/recrecommended-products-list.component';
import { MatBadgeModule } from '@angular/material/badge';
import { ShoppingBasketComponent } from './shopping-basket/shopping-basket.component';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationDialogComponent,
    LoginDialogComponent,
    FilterComponent,
    RecommendedProductComponent,
    RecommendedProductDetailComponent,
    RecrecommendedProductsListComponent,
    ShoppingBasketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
    MatBadgeModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
