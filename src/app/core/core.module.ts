import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { DarkOnHoverDirective } from './directives/dark-on-hover.directive';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [CardComponent, DarkOnHoverDirective, HeaderComponent],
  imports: [CommonModule],
  exports: [CardComponent, DarkOnHoverDirective, HeaderComponent],
})
export class CoreModule {}
