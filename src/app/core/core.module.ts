import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { DarkOnHoverDirective } from './directives/dark-on-hover.directive';

@NgModule({
  declarations: [CardComponent, DarkOnHoverDirective],
  imports: [CommonModule],
  exports: [CardComponent, DarkOnHoverDirective],
})
export class CoreModule {}
