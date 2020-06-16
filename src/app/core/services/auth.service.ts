import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { take, tap } from 'rxjs/operators';
import { User } from '../model/User.interface';
import { TokenService } from './token.service';
import { error } from 'protractor';

const URL = environment.URL + '/user/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  authenticator(user: User) {
    return this.http.post(URL, user, { observe: 'response' }).pipe(
      take(1),
      tap((res) =>
        this.tokenService.setToken(res.headers.get('x-access-token'))
      )
    );
  }
}
