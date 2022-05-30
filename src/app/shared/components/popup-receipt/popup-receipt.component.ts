import {Component, Output, EventEmitter, Input, AfterViewInit, OnInit} from '@angular/core';
import {AuthService} from '../../../modules/auth/auth.service';
import {GlobalService} from '../../../services/global.service';

@Component({
  selector: 'app-popup-receipt',
  templateUrl: './popup-receipt.component.html',
  styleUrls: ['./popup-receipt.component.scss']
})
export class PopupReceiptComponent implements OnInit, AfterViewInit {
  userUuid = this.authService.userUuid$.getValue();
  isMobileScreen: boolean | undefined;
  isReceiptSent = false;
  @Output() closePopupBtn = new EventEmitter<boolean>();

  constructor(private authService: AuthService,
              private globalService: GlobalService) { }

  ngOnInit(): void {
    this.isMobileScreen = this.globalService.less767Checked();
  }

  ngAfterViewInit(): void {
    this.isMobileScreen ? this.setQRWidget() : null;
  }

  closePopup(): void {
    this.closePopupBtn.emit();
  }

  setQRWidget(): void {
    const widgetParams = {
      api: 'https://api.apmcheck.ru',
      apiKey: '03eaaf6f-0dd5-4857-adb9-b7be10ead8fa',
      userUuid: this.userUuid,
      maxPhotoSizeInMiB: 25,
      styles: {
        mainButton: 'custom-main-button',
        manualQrButton: 'custom-manual-qr-button',
        uploadPhotosButton: 'custom-upload-button',
        submitManualQrButton: 'custom-submit-manual-qr-button',
        addPhotoButton: 'custom-add-photo-button',
        submitPhotosButton: 'custom-submit-photos-button'
      },
      i18n: {
        labels: {
          mainButton: 'Прикрепить чек',
          manualQrButton: 'Ввести данные вручную',
          uploadPhotosButton: 'Загрузить фото чека',
          submitManualQrButton: 'Отправить',
          addPhotoButton: 'Добавить фото',
          submitPhotosButton: 'Отправить'
        },
        screens: {
          scanQr: {
            header: 'Сканирование',
            subheader: 'Наведите камеру на QR-код'
          },
          manualInput: {
            header: 'Ручной ввод',
            subheader: 'Введите данные с чека'
          },
          cameraNotAvailable: {
            subheader: 'Мы не можем получить доступ к камере устройства.<br>Разрешите браузеру обращаться к камере или введите данные с чека вручную'
          },
          qrParsed: {
            header: 'Благодарим!',
            subheader: 'Ваш чек принят в обработку.'
          },
          uploadFiles: {
            header: 'Загрузка фото',
            subheader: 'Добавьте фото чека (до 5 частей)',
            fileTooLargeError: 'Файл больше 25 МБ. Загрузите файл меньшего размера.'
          },
          sentReceiptFailed: {
            header: 'Не удалось отправить чек!'
          }
        }
      },
      callbacks: {
        onReceiptSentSuccess: (res: any) => {
          this.isReceiptSent = true;
          console.log(res);
        },
        onReceiptSentError: (res: any) => {
          console.log(res);
        }
      }
    };
    // @ts-ignore
    qrWidget.init('apm-widget-mobile', widgetParams);
  }
}
