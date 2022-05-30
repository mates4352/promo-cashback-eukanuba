import { Component, Input, OnInit,  } from '@angular/core';

@Component({
  selector: 'icon-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss']
})

export class ArrowComponent implements OnInit {

  @Input() color = '#000000';

  constructor() { }

  ngOnInit(): void {
  }

}
