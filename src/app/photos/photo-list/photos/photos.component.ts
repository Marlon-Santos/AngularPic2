import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photos } from '../../model/Photos.interface';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnChanges {
  @Input() photos: Photos[];
  photosGroup: any[];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.photos) {
      this.newPhotosRow(this.photos);
    }
  }
  newPhotosRow(photos: Photos[]) {
    this.photosGroup = [];
    for (let index = 0; index < photos.length; index += 3) {
      this.photosGroup.push(photos.slice(index, index + 3));
    }
  }
}
