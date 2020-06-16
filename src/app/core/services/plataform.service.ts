import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class PlataformService {
  constructor(@Inject(PLATFORM_ID) private platformId: string) {}
  isBrowser() {
    return isPlatformBrowser(this.platformId);
  }
}
