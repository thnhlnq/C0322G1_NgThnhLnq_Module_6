import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ViewInfoRoutingModule} from './view-info-routing.module';
import {ViewInfoComponent} from './view-info.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [ViewInfoComponent],
  imports: [
    CommonModule,
    ViewInfoRoutingModule,
    MatButtonModule
  ]
})
export class ViewInfoModule {
}
