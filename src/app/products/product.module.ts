import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductDetailComponent} from '../product-detail/product-detail.component';
import {ProductsListComponent} from './products-list.component';
import {ConvertLineToSpaces} from '../shared/convert-line-to-spaces';
import {StarComponent} from '../shared/star.component';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import {ProductGuard} from '../guards/product.guard';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsListComponent
  },
  {
    path: 'products/:id',
    canActivate: [ProductGuard],
    component: ProductDetailComponent
  },
];

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductsListComponent,
    ConvertLineToSpaces,
    StarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
