import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CartComponent} from './cart/cart.component';
import {AuthGuard} from '../security/auth.guard.';
import {CartDetailComponent} from './cart-detail/cart-detail.component';


const routes: Routes = [{
  path: '',
  component: CartComponent,
  canActivate: [AuthGuard],
  data: {
    roles: ['ROLE_ADMIN', 'ROLE_USER']
  }
}, {
  path: 'detail',
  component: CartDetailComponent,
  canActivate: [AuthGuard],
  data: {
    roles: ['ROLE_ADMIN', 'ROLE_USER']
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {
}
