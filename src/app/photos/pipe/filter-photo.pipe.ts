import { Pipe, PipeTransform } from '@angular/core';
import { Photos } from '../model/Photos.interface';

@Pipe({
  name: 'filterPhotosPipe',
})
export class FilterPhotosPipePipe implements PipeTransform {
  transform(photos: Photos[], text: string): Photos[] {
    const format = (textFormat: string) => textFormat.trim().toLowerCase();
    if (text) {
      return photos.filter((photo) =>
        format(photo.description).includes(format(text))
      );
    }
    return photos;
  }
}
