import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {cardList} from './auth-data';
import {AuthService} from './auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {
  isPopupOpen = false;
  cardList = cardList;
  number: number | undefined;
  @ViewChild('inputTel') tel: ElementRef | any;

  constructor(private authService: AuthService) {}

  public form = new FormGroup({
    tel: new FormControl('', [
      Validators.required
    ])
  });

  ngOnInit(): void {
    this.authService.getUserInfo();
  }

  submitForm(): void {
    this.isPopupOpen = true;
    this.tel = this.tel.nativeElement.value.replace(/[^0-9]/g, '');
    localStorage.setItem('username', this.tel);
    this.authService.sendRegistrationRequest(this.tel);
  }
}
