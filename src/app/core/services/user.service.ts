import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { UserLogged as User } from '../model/User.interface';
import * as jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(null);

  constructor(private tokenService: TokenService) {
    if (tokenService.hasToken()) {
      this.decodeToken();
    }
  }

  setToken(token: string): void {
    this.tokenService.setToken(token);
    this.decodeToken();
  }

  private decodeToken(): void {
    this.userSubject.next(jwt_decode(this.tokenService.getToken()) as User);
  }

  getUserInfo(): Observable<User> {
    return this.userSubject.asObservable();
  }
}
