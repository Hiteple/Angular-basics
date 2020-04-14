import {Component, OnInit} from '@angular/core';
import { IProduct } from './Product';
import {ProductsService} from '../services/products.service';
import {catchError, tap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  constructor(private productsService: ProductsService) {
  }

  get listFilter(): string {
    return this.listFilterString;
  }

  set listFilter(value: string) {
    this.listFilterString = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  pageTitle = 'Products List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';

  // Filtering
  listFilterString: string;
  filteredProducts: Array<IProduct>;

  // All products
  products: Array<IProduct>;

  private static handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = 'An error ocurred: ' + error.error.message;
    } else {
      errorMessage = 'Server returned code: ' + error.status + ', error message is: ' + error.error.message;
    }
    return errorMessage;
  }

  private performFilter(filterBy: string): Array<IProduct> {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => {
      return product.productName.toLocaleLowerCase().indexOf(filterBy) !== - 1;
    });
  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(
      data => {
        this.products = data;
        this.filteredProducts = this.products;
      },
      error => this.errorMessage = ProductsListComponent.handleError(error)
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = `Product list ${message}`;
  }
}
