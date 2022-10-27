import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {VerityResetPasswordComponent} from './verity-reset-password/verity-reset-password.component';


const routes: Routes = [
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  }, {
    path: 'verify-reset-password/:name',
    component: VerityResetPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule {
}
