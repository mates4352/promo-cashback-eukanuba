import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  checkBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  less767Checked(): boolean {
    let is767 = false;
    if (this.checkBrowser()) {
      is767 = document.documentElement.offsetWidth <= 767;
    }
    return is767;
  }
}
