import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { HttpClientModule } from '@angular/common/http';
import { PhotoListComponent } from './photo-list/photo-list.component';
@NgModule({
  declarations: [PhotoComponent, PhotoListComponent],
  imports: [CommonModule, HttpClientModule],
})
export class PhotosModule {}
