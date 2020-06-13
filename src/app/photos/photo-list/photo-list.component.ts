import { Component, OnInit } from '@angular/core';
import { Photos } from '../model/Photos.interface';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../service/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit {
  photos: Photos[] = [];
  filterText = '';
  count = 1;
  constructor(
    private activedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  ngOnInit(): void {
    this.photos = this.activedRoute.snapshot.data.photoListResolver;
  }
  previous() {
    this.count -= 1;
    this.photoService
      .getPhotos(this.activedRoute.snapshot.params.userName, this.count)
      .subscribe((photos) => (this.photos = photos));
  }

  next() {
    this.count += 1;
    this.photoService
      .getPhotos(this.activedRoute.snapshot.params.userName, this.count)
      .subscribe((photos) => (this.photos = photos));
  }
}
