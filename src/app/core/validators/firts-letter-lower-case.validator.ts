import { AbstractControl } from '@angular/forms';

export function firtsLetterLowerCase(control: AbstractControl) {
  if (control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value)) {
    return { firtsLetterLowerCase: true };
  }
  return null;
}
