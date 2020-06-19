import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { take, tap } from 'rxjs/operators';

const URL = environment.URL + '/user/exists/';

@Injectable({
  providedIn: 'root',
})
export class UserExistService {
  constructor(private http: HttpClient) {}

  userExists(username: string): Observable<boolean> {
    return this.http.get<boolean>(URL + username).pipe(take(1));
  }
}
