import { Component, OnInit } from '@angular/core';
import {IProduct} from '../products/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product detail';
  product: IProduct;

  constructor() {}

  ngOnInit(): void {
  }

}
