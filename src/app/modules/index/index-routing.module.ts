import {NgModule} from '@angular/core';
import {IndexComponent} from './index.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: IndexComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule {
}
