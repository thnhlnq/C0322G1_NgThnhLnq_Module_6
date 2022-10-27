import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {TokenStorageService} from '../service/token-storage.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private tokenStorageService: TokenStorageService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser = this.tokenStorageService.getUser();
    if (currentUser !== null) {
      const role = currentUser.roles[0];
      if (route.data.roles.indexOf(role) === -1) {
        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}}).then();
        Swal.fire('Thông Báo !!', 'Bạn Không Có Quyền Vào Chức Năng Này', 'warning').then();
        return false;
      }
      return true;
    }
    this.router.navigate(['login'], {queryParams: {returnUrl: state.url}}).then();
    return false;
  }
}
