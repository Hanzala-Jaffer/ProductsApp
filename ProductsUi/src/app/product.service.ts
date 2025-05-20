// src/app/product.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export interface Product {
  name: string;
  // category: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:5035/api/products';

  // Stores the full list of products
  private productsSubject = new BehaviorSubject<Product[]>([]);
  products$ = this.productsSubject.asObservable();

  // Stores category counts
  private categoryCountsSubject = new BehaviorSubject<Record<string, number>>({});
  categoryCounts$ = this.categoryCountsSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Load products from API
  getProducts() {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      tap(products => {
        this.productsSubject.next(products);
        this.updateCategoryCounts(products);
      })
    );
  }

  // Add a product and refresh
  addProduct(product: Product) {
    return this.http.post(this.baseUrl, product).pipe(
      tap(() => this.getProducts().subscribe()) // refresh products after adding
    );
  }

  // Update category counts from full product list
  private updateCategoryCounts(products: Product[]) {
    const counts: Record<string, number> = {};
    
    for (const p of products) {
      counts["Cars"] = (counts["Cars"] || 0) + 1;
    }

    this.categoryCountsSubject.next(counts);
  }

}
