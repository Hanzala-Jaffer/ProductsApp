// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductsComponent, LoginComponent, SidebarComponent],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  isLoggedIn = false;

  ngOnInit(): void {
    const token = localStorage.getItem('jwtToken');
    this.isLoggedIn = !!token;
  }

  onLogin() {
    this.isLoggedIn = true;
  }

  logout() {
    localStorage.removeItem('jwtToken');
    this.isLoggedIn = false;
  }
}