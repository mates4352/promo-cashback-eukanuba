import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../../../modules/auth/auth.service';

@Component({
  selector: 'app-popup-registration',
  templateUrl: './popup-registration.component.html',
  styleUrls: ['./popup-registration.component.scss']
})
export class PopupRegistrationComponent implements OnInit {
  value = '';
  username = localStorage.getItem('username');
  timerLeft: string | undefined;
  timerInit: any;
  timer = 60000;

  isTermsAccepted = false;
  isOlder18 = false;
  isSendAgainClicked = false;
  isCodeError = false;

  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: ''
  };

  @Output() closePopupBtn = new EventEmitter<boolean>();

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.setTimer();
  }

  onValueChange(value: string): void {
    this.value = value;
  }

  applyTerms(): void {
    this.isTermsAccepted = !this.isTermsAccepted;
  }

  applyAge(): void {
    this.isOlder18 = !this.isOlder18;
  }

  checkFormValid(): boolean {
    return this.isTermsAccepted && this.isOlder18 && this.value.length === 6;
  }

  login(): void {
    this.authService.sendLoginRequest(this.username, this.value).subscribe(() => {
      this.isCodeError = false;
    }, error => {
      this.isCodeError = true;
    });
  }

  onSendAgain(): void {
    this.authService.sendRegistrationRequest(this.username);
    this.isSendAgainClicked = true;
    const getLocalTime = new Date().getTime() + 60000;
    localStorage.setItem('timer', `${getLocalTime}`);
    this.startTimer(this.timer);
  }

  setTimer(): void {
    const nowTime = new Date().getTime();
    const leftCodeTime = localStorage.getItem('timer');
    if (Number(leftCodeTime) <= +nowTime) {
      localStorage.removeItem('timer');
    } else {
      this.startTimer(Number(leftCodeTime) - +nowTime);
    }
  }

  startTimer(timer: number): void {
    let time = Math.round(timer / 1000);
    this.timerInit = setInterval(() => {
      time -= 1;
      if (time < 1) {
        this.isSendAgainClicked = false;
        clearInterval(this.timerInit);
      }
      const minutes = Math.floor(time / 60);
      const seconds = (time % 60).toFixed(0);
      this.timerLeft = +minutes + ':' + (+seconds < 10 ? '0' : '') + +seconds;
    }, 1000);
  }

  closePopup(): void {
    this.closePopupBtn.emit();
  }

}
