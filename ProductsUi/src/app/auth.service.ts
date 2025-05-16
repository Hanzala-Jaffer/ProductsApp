import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:5035/api';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post(`${this.baseUrl}/auth/login`, { username, password });
  }

  setToken(token: string) {
    localStorage.setItem('jwtToken', token);
  }

  getToken() {
    return localStorage.getItem('jwtToken');
  }
}