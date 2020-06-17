import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { take, tap } from 'rxjs/operators';
import { UserLogin as User } from '../model/User.interface';
import { UserService } from './user.service';

const URL = environment.URL + '/user/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private userService: UserService) {}

  authenticator(user: User) {
    return this.http.post(URL, user, { observe: 'response' }).pipe(
      take(1),
      tap((res) => this.userService.setToken(res.headers.get('x-access-token')))
    );
  }
}
