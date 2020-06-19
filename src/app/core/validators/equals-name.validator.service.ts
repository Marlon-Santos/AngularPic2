import { Injectable } from '@angular/core';
import { UserExistService } from '../services/user-exist.service';
import { AbstractControl } from '@angular/forms';
import { switchMap, debounceTime, map, first } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class EqualsNameValidatorService {
  constructor(private userExistService: UserExistService) {}

  existUserName() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        debounceTime(500),
        switchMap((userName) => this.userExistService.userExists(userName)),
        map((exist) => (exist ? { existUserName: true } : null)),
        first()
      );
    };
  }
}
