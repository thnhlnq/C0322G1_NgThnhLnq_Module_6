import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about.component';


const routes: Routes = [{
  path: '',
  component: AboutComponent,
  // canActivate: [AuthGuard],
  // data: {
  //   roles: ['ROLE_ADMIN', 'ROLE_USER']
  // }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {
}
