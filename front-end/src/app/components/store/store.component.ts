import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from '../../types/Product';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  products: Product[] = [];

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(
      res => {
        this.products = res;
      },
      err => {
        console.log(err);
      }
    )
  }
}
