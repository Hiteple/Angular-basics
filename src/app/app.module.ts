import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {WelcomeComponent} from './home/welcome.component';
import {ProductsListComponent} from './products/products-list.component';
import {FormsModule} from '@angular/forms';
import {ConvertLineToSpaces} from './shared/convert-line-to-spaces';
import {StarComponent} from './shared/star.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {ProductGuard} from './guards/product.guard';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'products',
    component: ProductsListComponent
  },
  {
    path: 'products/:id',
    canActivate: [ProductGuard],
    component: ProductDetailComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductsListComponent,
    StarComponent,
    ConvertLineToSpaces,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
