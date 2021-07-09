import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService
      .getProducts()
      .pipe(tap((res) => console.log(res)))
      .subscribe();
  }
}
