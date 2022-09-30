import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./book/book.module').then(module => module.BookModule)
}, {
  path: 'login',
  loadChildren: () => import('./login/login.module').then(module => module.LoginModule)
}, {
  path: 'register',
  loadChildren: () => import('./register/register.module').then(module => module.RegisterModule)
}, {
  path: 'cart',
  loadChildren: () => import('./cart/cart.module').then(module => module.CartModule)
}, {
  path: 'detail/:id',
  loadChildren: () => import('./detail/detail.module').then(module => module.DetailModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
