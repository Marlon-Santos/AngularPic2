import { Component, OnInit, Input } from '@angular/core';
import { Photos } from '../model/Photos.interface';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent implements OnInit {
  @Input() photoInfo: Photos;

  constructor() {}

  ngOnInit(): void {}
}
