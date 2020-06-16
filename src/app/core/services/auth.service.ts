import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User.interface';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';

const URL = environment.URL + '/user/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  authenticator(user: User) {
    console.log(user);

    return this.http.post(URL, user).pipe(take(1));
  }
}
