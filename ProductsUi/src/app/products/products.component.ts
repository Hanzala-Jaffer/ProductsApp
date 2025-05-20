// src/app/products/products.component.ts
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  name = '';
  products: any[] = [];
  // private baseUrl = 'http://localhost:5035/api/products';

  constructor(private http: HttpClient,  private productService: ProductService) {
    this.productService.products$.subscribe(data => {
      this.products = data;
    });
    this.loadProducts();
  }

  // loadProducts() {
  //   this.http.get(this.baseUrl).subscribe((data: any) => this.products = data);
  // }

  loadProducts(){
    this.productService.getProducts().subscribe();
  }
  addProduct() {
    const product = { name: this.name};
    this.productService.addProduct(product).subscribe(() => this.name = '');
  }
}