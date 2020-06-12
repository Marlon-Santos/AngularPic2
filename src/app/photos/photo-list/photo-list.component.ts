import { Component, OnInit } from '@angular/core';
import { Photos } from '../model/Photos.interface';
import { PhotoService } from '../service/photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit {
  photos: Photos[] = [];
  constructor(
    private photoService: PhotoService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const userName = this.activedRoute.snapshot.params.userName;
    this.getPhotos(userName);
  }

  getPhotos(userName: string): void {
    this.photoService
      .getPhotos(userName)
      .subscribe((photos) => (this.photos = photos));
  }
}
