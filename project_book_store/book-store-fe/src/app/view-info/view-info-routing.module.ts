import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewInfoComponent} from './view-info.component';
import {AuthGuard} from '../security/auth.guard.';


const routes: Routes = [{
  path: '',
  component: ViewInfoComponent,
  canActivate: [AuthGuard],
  data: {
    roles: ['ROLE_ADMIN', 'ROLE_USER']
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewInfoRoutingModule {
}
