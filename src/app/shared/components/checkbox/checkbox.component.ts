import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() id: string | undefined;
  @Input() text: string | undefined;
  @Input() isChecked: boolean | undefined;
  @Input() required: boolean | undefined;

  @Output() valueChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  onValueChange(): void {
    this.isChecked = !this.isChecked;
    this.valueChange.emit(this.isChecked);
  }

}
