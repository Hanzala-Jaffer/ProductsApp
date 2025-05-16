// src/app/login/login.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  @Output() loginSuccess = new EventEmitter<void>();

  username = '';
  password = '';

  constructor(private auth: AuthService) {}

  login() {
    this.auth.login(this.username, this.password).subscribe((res: any) => {
      this.auth.setToken(res.token);
      alert('Login successful!');
      this.loginSuccess.emit();
    });
  }
}