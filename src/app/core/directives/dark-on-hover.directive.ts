import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appDarkOnHover]',
})
export class DarkOnHoverDirective {
  constructor(private ref: ElementRef, private render: Renderer2) {}
  @HostListener('mouseover')
  onMouseOver() {
    this.render.setStyle(this.ref.nativeElement, 'filter', 'brightness(70%)');
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.render.setStyle(this.ref.nativeElement, 'filter', 'brightness(100%)');
  }
}
