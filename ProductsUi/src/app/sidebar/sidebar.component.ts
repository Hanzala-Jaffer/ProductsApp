// src/app/sidebar/sidebar.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html' 
})
export class SidebarComponent {
  categoryCounts: Record<string, number> = {};
  categoryKeys: string[] = [];

  constructor(private productService: ProductService) {
    this.productService.categoryCounts$.subscribe((counts: Record<string, number>) => {
      this.categoryCounts = counts;
      this.categoryKeys = Object.keys(counts);
    });
  }
}
