import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactComponent} from './contact.component';


const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
    // canActivate: [AuthGuard],
    // data: {
    //   roles: ['ROLE_ADMIN', 'ROLE_USER']
    // }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {
}
