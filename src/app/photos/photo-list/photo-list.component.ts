import { Component, OnInit } from '@angular/core';
import { Photos } from '../model/Photos.interface';
import { PhotoService } from '../service/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit {
  photos: Photos[];

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService
      .getPhotos('flavio')
      .subscribe((photos) => (this.photos = photos));
  }
}
