import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Photos } from '../model/Photos.interface';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Params } from '@angular/router';

const URL_PHOTOS = (name: string) => `${environment.URL_PHOTOS}/${name}/photos`;

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  getPhotos(user: string, page: number): Observable<Photos[]> {
    const params = new HttpParams().append('page', page.toString().trim());
    return this.http
      .get<Photos[]>(URL_PHOTOS(user), { params })
      .pipe(take(1));
  }
}
