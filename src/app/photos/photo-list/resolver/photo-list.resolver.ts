import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Photos } from '../../model/Photos.interface';
import { PhotoService } from '../../service/photo.service';

@Injectable({
  providedIn: 'root',
})
export class PhotoListResolver implements Resolve<Observable<Photos[]>> {
  constructor(private photoService: PhotoService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Photos[]> {
    return this.photoService.getPhotos(route.params.userName, 1);
  }
}
