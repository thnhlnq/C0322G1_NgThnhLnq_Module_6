import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CartComponent} from './cart.component';


const routes: Routes = [{
  path: '',
  component: CartComponent,
  // canActivate: [AuthGuard],
  // data: {
  //   roles: ['ROLE_ADMIN']
  // }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {
}
