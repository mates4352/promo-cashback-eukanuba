import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() number: string | undefined;
  @Input() title: string | undefined;
  @Input() subTitle: string | undefined;
  @Input() isSubTitleCarryover: boolean | undefined;
  @Input() text: string | undefined;
  @Input() subText: string | undefined;
  @Input() isSubTextCarryover: boolean | undefined;
  @Input() link: string | undefined;
  @Input() icon: string | undefined;
  @Input() href: string | undefined;
  @Input() isImgTitleVisible: boolean | undefined;
  @Input() isImgTextVisible: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
