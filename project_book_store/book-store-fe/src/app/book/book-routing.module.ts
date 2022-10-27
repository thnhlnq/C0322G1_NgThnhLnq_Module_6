import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './list/list.component';
import {CreateComponent} from './create/create.component';
import {EditComponent} from './edit/edit.component';
import {DetailComponent} from './detail/detail.component';
import {AuthGuard} from '../security/auth.guard.';


const routes: Routes = [{
  path: '',
  component: ListComponent,
  // canActivate: [AuthGuard],
  // data: {
  //   roles: ['ROLE_ADMIN', 'ROLE_USER']
  // }
}, {
  path: 'create',
  component: CreateComponent,
  canActivate: [AuthGuard],
  data: {
    roles: ['ROLE_ADMIN']
  }
}, {
  path: 'edit/:id',
  component: EditComponent,
  canActivate: [AuthGuard],
  data: {
    roles: ['ROLE_ADMIN']
  }
}, {
  path: 'detail/:id',
  component: DetailComponent,
  // canActivate: [AuthGuard],
  // data: {
  //   roles: ['ROLE_ADMIN']
  // }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule {
}
