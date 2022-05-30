import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth.component';
import {AuthRoutingModule} from './auth-routing.module';
import {SharedModule} from 'src/app/shared/shared.module';
import {NgxMaskModule} from 'ngx-mask';

@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    NgxMaskModule.forChild()
  ]
})
export class AuthModule {
}
