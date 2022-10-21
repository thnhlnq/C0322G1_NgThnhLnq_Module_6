import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./book/book.module').then(module => module.BookModule),
  // canActivate: [AuthGuard],
  // data: {
  //   roles: ['ROLE_ADMIN', 'ROLE_USER']
  // }
}, {
  path: 'login',
  loadChildren: () => import('./login/login.module').then(module => module.LoginModule),
  // canActivate: [AuthGuard],
  // data: {
  //   roles: ['ROLE_ADMIN', 'ROLE_USER']
  // }
}, {
  path: 'register',
  loadChildren: () => import('./register/register.module').then(module => module.RegisterModule),
  // canActivate: [AuthGuard],
  // data: {
  //   roles: ['ROLE_ADMIN', 'ROLE_USER']
  // }
}, {
  path: 'cart',
  loadChildren: () => import('./cart/cart.module').then(module => module.CartModule),
  // canActivate: [AuthGuard],
  // data: {
  //   roles: ['ROLE_ADMIN', 'ROLE_USER']
  // }
}, {
  path: 'about',
  loadChildren: () => import('./about/about.module').then(module => module.AboutModule),
}, {
  path: 'contact',
  loadChildren: () => import('./contact/contact.module').then(module => module.ContactModule),
}, {
  path: 'view-info',
  loadChildren: () => import('./view-info/view-info.module').then(module => module.ViewInfoModule),
}];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Add options right here
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
