import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photos } from './model/Photos.interface';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const URL_PHOTOS = (name: string) => `${environment.URL_PHOTOS}/${name}/photos`;

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}
  getPhotos(user: string): Observable<Photos[]> {
    return this.http.get<Photos[]>(URL_PHOTOS(user)).pipe(take(1));
  }
}
