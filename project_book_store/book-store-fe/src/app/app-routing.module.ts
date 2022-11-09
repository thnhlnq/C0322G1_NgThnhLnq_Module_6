import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./book/book.module').then(module => module.BookModule),
}, {
  path: 'login',
  loadChildren: () => import('./login/login.module').then(module => module.LoginModule),
}, {
  path: 'register',
  loadChildren: () => import('./register/register.module').then(module => module.RegisterModule),
}, {
  path: 'cart',
  loadChildren: () => import('./cart/cart.module').then(module => module.CartModule),
}, {
  path: 'about',
  loadChildren: () => import('./about/about.module').then(module => module.AboutModule),
}, {
  path: 'contact',
  loadChildren: () => import('./contact/contact.module').then(module => module.ContactModule),
}, {
  path: 'view-info',
  loadChildren: () => import('./view-info/view-info.module').then(module => module.ViewInfoModule),
}, {
  path: 'security',
  loadChildren: () => import('./security/security.module').then(module => module.SecurityModule),
}, {
  path: 'statistic',
  loadChildren: () => import('./statistic/statistic.module').then(module => module.StatisticModule),
}, {
  path: 'chat',
  loadChildren: () => import('./chat/chat.module').then(module => module.ChatModule),
}];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
