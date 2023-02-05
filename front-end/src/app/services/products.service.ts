import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../types/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private URL: string = 'http://localhost:4201/api';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>(this.URL + "/get-products");
  }
}
