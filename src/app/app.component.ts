import { Component, OnInit } from '@angular/core';

import { Photos } from './photos/photo/model/Photos.interface';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  photos: Photos[];

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService
      .getPhotos('flavio')
      .subscribe((photos) => (this.photos = photos));
  }
}
