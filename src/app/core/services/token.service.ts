import { Injectable } from '@angular/core';
const KEY = 'authToken';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  hasToken(): boolean {
    return !!this.getToken();
  }
  getToken(): string {
    return window.localStorage.getItem(KEY);
  }
  setToken(token: string): void {
    window.localStorage.setItem(KEY, token);
  }
  deleteToken(): void {
    window.localStorage.removeItem(KEY);
  }
}
