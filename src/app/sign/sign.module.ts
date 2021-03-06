import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingInComponent } from './sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignComponent } from './sign.component';
import { SignRoutingModule } from './sign-routing.module';

@NgModule({
  declarations: [SingInComponent, SignUpComponent, SignComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, SignRoutingModule],
})
export class SignModule {}
