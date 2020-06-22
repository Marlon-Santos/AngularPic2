import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { DarkOnHoverDirective } from './directives/dark-on-hover.directive';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './inteceptors/request.interceptor';

@NgModule({
  declarations: [CardComponent, DarkOnHoverDirective, HeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [CardComponent, DarkOnHoverDirective, HeaderComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
  ],
})
export class CoreModule {}
