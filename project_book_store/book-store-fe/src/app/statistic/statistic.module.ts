import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StatisticRoutingModule} from './statistic-routing.module';
import {StatisticComponent} from './statistic.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [StatisticComponent],
  imports: [
    CommonModule,
    StatisticRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class StatisticModule {
}
