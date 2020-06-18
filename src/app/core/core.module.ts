import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { DarkOnHoverDirective } from './directives/dark-on-hover.directive';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CardComponent, DarkOnHoverDirective, HeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [CardComponent, DarkOnHoverDirective, HeaderComponent],
})
export class CoreModule {}
