import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingInComponent } from './sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [SingInComponent, SignUpComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
})
export class SignModule {}
