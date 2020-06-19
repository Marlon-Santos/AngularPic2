import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { take, tap } from 'rxjs/operators';
import { UserLogin as User, NewUser } from '../model/User.interface';
import { UserService } from './user.service';

const SIGNIN = environment.URL + '/user/login';
const SIGNUP = environment.URL + '/user/signup';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private userService: UserService) {}

  authenticator(user: User) {
    return this.http.post(SIGNIN, user, { observe: 'response' }).pipe(
      take(1),
      tap((res) => this.userService.setToken(res.headers.get('x-access-token')))
    );
  }

  register(newUser: NewUser) {
    return this.http.post(SIGNUP, newUser).pipe(take(1));
  }
}
