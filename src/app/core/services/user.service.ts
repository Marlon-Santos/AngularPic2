import { Injectable } from '@angular/core';

import { TokenService } from './token.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserLogged as User } from '../model/User.interface';
import * as jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(null);
  private userName: string;

  constructor(private tokenService: TokenService) {
    if (tokenService.hasToken()) {
      this.decodeToken();
    }
  }

  setToken(token: string): void {
    this.tokenService.setToken(token);
    this.decodeToken();
  }

  logout(): void {
    this.tokenService.deleteToken();
    this.userSubject.next(null);
  }

  private decodeToken(): void {
    const decode = jwt_decode(this.tokenService.getToken()) as User;
    this.userSubject.next(decode);
    this.userName = decode.name;
  }

  getUserInfo(): Observable<User> {
    return this.userSubject.asObservable();
  }

  isLogged(): boolean {
    return this.tokenService.hasToken();
  }

  getUserName(): string {
    return this.userName;
  }
}
