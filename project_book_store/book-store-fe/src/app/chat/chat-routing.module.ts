import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../security/auth.guard.';
import {AddroomComponent} from './addroom/addroom.component';
import {ChatroomComponent} from './chatroom/chatroom.component';
import {LoginComponent} from './login/login.component';
import {RoomlistComponent} from './roomlist/roomlist.component';


const routes: Routes = [{
  path: 'addroom',
  component: AddroomComponent,
  canActivate: [AuthGuard],
  data: {
    roles: ['ROLE_ADMIN', 'ROLE_USER']
  }
}, {
  path: 'chatroom/:roomname',
  component: ChatroomComponent,
  canActivate: [AuthGuard],
  data: {
    roles: ['ROLE_ADMIN', 'ROLE_USER']
  }
}, {
  path: 'login',
  component: LoginComponent,
  canActivate: [AuthGuard],
  data: {
    roles: ['ROLE_ADMIN', 'ROLE_USER']
  }
}, {
  path: 'roomlist',
  component: RoomlistComponent,
  canActivate: [AuthGuard],
  data: {
    roles: ['ROLE_ADMIN', 'ROLE_USER']
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule {
}
