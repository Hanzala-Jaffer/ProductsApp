// src/app/products/products.component.ts
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  name = '';
  products: any[] = [];
  private baseUrl = 'http://localhost:5035/api/products';

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  loadProducts() {
    this.http.get(this.baseUrl).subscribe((data: any) => this.products = data);
  }

  addProduct() {
    this.http.post(this.baseUrl, { name: this.name }).subscribe(() => this.loadProducts());
  }
}