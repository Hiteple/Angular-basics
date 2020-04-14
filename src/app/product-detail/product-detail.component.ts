import { Component, OnInit } from '@angular/core';
import {IProduct} from '../products/Product';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product detail';
  product: IProduct;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product = {
      productId : 10,
      productName : 'Video Game Controller',
      productCode : 'GMG-0042',
      releaseDate : 'October 15, 2018',
      description : 'Standard two-button video game controller',
      price : 35.95,
      starRating : 4.6,
      imageUrl : 'assets/images/xbox-controller.png'
    };
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
