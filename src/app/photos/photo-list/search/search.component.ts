import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  OnDestroy,
} from '@angular/core';
import { debounce, debounceTime, take, tap, takeUntil } from 'rxjs/operators';
import { pipe, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  @Output() filterText = new EventEmitter<string>();
  textDebounce = new Subject<string>();
  unsubdescribeAll = new Subject<string>();
  constructor() {}

  ngOnInit(): void {}

  filter(text: string): void {
    this.textDebounce.next(text);
    this.textDebounce
      .pipe(takeUntil(this.unsubdescribeAll), debounceTime(1000))
      .subscribe((result) => this.filterText.emit(result));
  }
  ngOnDestroy(): void {
    this.unsubdescribeAll.next('');
    this.unsubdescribeAll.complete();
  }
}
