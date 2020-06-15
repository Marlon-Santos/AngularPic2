import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { HttpClientModule } from '@angular/common/http';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { SearchComponent } from './photo-list/search/search.component';
import { FilterPhotosPipePipe } from './pipe/filter-photo.pipe';
import { CoreModule } from '../core/core.module';
@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    PhotosComponent,
    SearchComponent,
    FilterPhotosPipePipe,
  ],
  imports: [CommonModule, HttpClientModule, CoreModule],
})
export class PhotosModule {}
