import {Component, OnInit} from '@angular/core';
import { IProduct } from './Product';
import {ProductsService} from '../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  constructor(private productsService: ProductsService) {
  }
  pageTitle = 'Products List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;

  // Filtering
  listFilterString: string;
  filteredProducts: Array<IProduct>;

  // All products
  products: Array<IProduct>;

  get listFilter(): string {
    return this.listFilterString;
  }

  set listFilter(value: string) {
    this.listFilterString = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  private performFilter(filterBy: string): Array<IProduct> {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => {
      return product.productName.toLocaleLowerCase().indexOf(filterBy) !== - 1;
    });
  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
    this.filteredProducts = this.products;
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = `Product list ${message}`;
  }
}
