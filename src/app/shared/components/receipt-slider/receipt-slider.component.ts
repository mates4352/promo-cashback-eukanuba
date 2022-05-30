import { Component, ViewEncapsulation} from '@angular/core';
import { listInfo } from './receipt-slider-data';

import SwiperCore, { Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-receipt-slider',
  templateUrl: './receipt-slider.component.html',
  styleUrls: ['./receipt-slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ReceiptSliderComponent {
  listInfo = listInfo;
}
