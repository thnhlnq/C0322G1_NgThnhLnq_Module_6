import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BookRoutingModule} from './book-routing.module';
import {ListComponent} from './list/list.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {CreateComponent} from './create/create.component';
import {EditComponent} from './edit/edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DetailComponent} from './detail/detail.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    EditComponent,
    DetailComponent
  ],
    imports: [
        CommonModule,
        BookRoutingModule,
        MatFormFieldModule,
        MatSelectModule,
        MatButtonModule,
        MatPaginatorModule,
        MatIconModule,
        MatInputModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatTooltipModule,
        MatProgressSpinnerModule
    ]
})
export class BookModule {
}
