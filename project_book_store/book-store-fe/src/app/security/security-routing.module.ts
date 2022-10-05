import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {VerityResetPasswordComponent} from './verity-reset-password/verity-reset-password.component';


const routes: Routes = [
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
    // canActivate: [AuthGuard],
    // data: {
    //   roles: ['ROLE_ADMIN', 'ROLE_USER']
    // }
  }, {
    path: 'verify-reset-password/:name',
    component: VerityResetPasswordComponent,
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
export class SecurityRoutingModule {
}
