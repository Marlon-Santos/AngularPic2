import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingInComponent } from './sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SingInComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
})
export class SingInModule {}
