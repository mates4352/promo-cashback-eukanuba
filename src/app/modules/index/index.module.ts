import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import {SharedModule} from '../../shared/shared.module';
import {IndexRoutingModule} from './index-routing.module';



@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    IndexRoutingModule
  ]
})
export class IndexModule { }
