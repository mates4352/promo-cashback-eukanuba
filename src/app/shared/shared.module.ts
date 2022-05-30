import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArrowComponent } from './icons/arrow/arrow.component';
import { CloseComponent } from './icons/close/close.component';
import { CoinsComponent } from './icons/coins/coins.component';
import { FacebookComponent } from './icons/facebook/facebook.component';
import { FillComponent } from './icons/fill/fill.component';
import { FoodComponent } from './icons/food/food.component';
import { InstagramComponent } from './icons/instagram/instagram.component';
import { QrCodeComponent } from './icons/qr-code/qr-code.component';
import { QuestionComponent } from './icons/question/question.component';
import { VkComponent } from './icons/vk/vk.component';
import { ZoomComponent } from './icons/zoom/zoom.component';
import { BtnComponent } from './components/btn/btn.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { PopupRegistrationComponent } from './components/popup-registration/popup-registration.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { PopupReceiptComponent } from './components/popup-receipt/popup-receipt.component';
import { SwiperModule } from 'swiper/angular';
import { ReceiptSliderComponent } from './components/receipt-slider/receipt-slider.component';
import { ReceiptComponent } from './components/receipt/receipt.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { NgxMaskModule } from 'ngx-mask';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { StatusBlockComponent } from './components/status-block/status-block.component';

@NgModule({
  declarations: [
    CardComponent,
    BtnComponent,
    HeaderComponent,
    FooterComponent,
    ArrowComponent,
    CloseComponent,
    CoinsComponent,
    FacebookComponent,
    FillComponent,
    FoodComponent,
    InstagramComponent,
    QrCodeComponent,
    QuestionComponent,
    VkComponent,
    ZoomComponent,
    CardComponent,
    PopupRegistrationComponent,
    PopupReceiptComponent,
    ReceiptSliderComponent,
    ReceiptComponent,
    CheckboxComponent,
    StatusBlockComponent,
  ],
    exports: [
        CardComponent,
        ReactiveFormsModule,
        BtnComponent,
        HeaderComponent,
        FooterComponent,
        ArrowComponent,
        CloseComponent,
        CoinsComponent,
        FacebookComponent,
        FillComponent,
        FoodComponent,
        InstagramComponent,
        QrCodeComponent,
        QuestionComponent,
        VkComponent,
        ZoomComponent,
        PopupRegistrationComponent,
        PopupReceiptComponent,
        StatusBlockComponent,
    ],
  imports: [
    CommonModule,
    NgxMaskModule.forRoot(
      {
        dropSpecialCharacters: false
      }),
    NgOtpInputModule,
    NgxImageZoomModule,
    SwiperModule,
    FormsModule
  ]
})
export class SharedModule { }
