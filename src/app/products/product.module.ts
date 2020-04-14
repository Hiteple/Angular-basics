import { NgModule } from '@angular/core';
import {ProductDetailComponent} from '../product-detail/product-detail.component';
import {ProductsListComponent} from './products-list.component';
import {ConvertLineToSpaces} from '../shared/convert-line-to-spaces';
import {RouterModule, Routes} from '@angular/router';
import {ProductGuard} from '../guards/product.guard';
import {SharedModule} from '../shared/shared.module';

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
    ConvertLineToSpaces
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ProductModule { }
