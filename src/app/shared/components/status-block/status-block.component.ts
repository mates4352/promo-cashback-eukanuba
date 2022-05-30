import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-status-block',
  templateUrl: './status-block.component.html',
  styleUrls: ['./status-block.component.scss']
})
export class StatusBlockComponent {
  @Input() receiptStatus: string | undefined;
  @Input() isPopup: boolean | undefined;

  constructor() {}

}
