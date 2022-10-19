import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TokenStorageService} from '../service/token-storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ShareService} from '../service/share.service';
import {CookieService} from 'ngx-cookie-service';
import {AuthService} from '../service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  formGroup: FormGroup;
  roles: string[] = [];
  username: string;
  returnUrl: string;


  constructor(private formBuild: FormBuilder,
              private tokenStorageService: TokenStorageService,
              private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute,
              private toast: ToastrService,
              private shareService: ShareService,
              private cookieService: CookieService) {
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '';
    this.formGroup = this.formBuild.group({
        username: [''],
        password: [''],
        remember_me: ['']
      }
    );

    if (this.tokenStorageService.getToken()) {
      this.authService.isLoggedIn = true;
      this.roles = this.tokenStorageService.getUser().roles;
      this.username = this.tokenStorageService.getUser().username;
    }
  }

  onSubmit() {
    this.authService.login(this.formGroup.value).subscribe(data => {
      if (this.formGroup.value.remember_me === true) {
        this.tokenStorageService.saveTokenLocal(data.token);
        this.tokenStorageService.saveUserLocal(data);
      } else {
        this.tokenStorageService.saveTokenSession(data.token);
        this.tokenStorageService.saveUserSession(data);
      }

      this.authService.isLoggedIn = true;
      this.username = this.tokenStorageService.getUser().username;
      this.roles = this.tokenStorageService.getUser().roles;
      this.formGroup.reset();
      this.router.navigateByUrl(this.returnUrl);
      Swal.fire({
        title: 'Thông Báo',
        text: 'Đăng Nhập Thành Công',
        icon: 'success',
        confirmButtonText: 'Trang Chủ'
      });
      // this.toast.success('Đăng Nhập Thành Công', 'Thông Báo ');
      this.shareService.sendClickEvent();
    }, err => {
      this.authService.isLoggedIn = false;
      Swal.fire({
        title: 'Đã Có Lỗi Xảy Ra !!',
        text: 'Sai Tên Đăng Nhập Hoặc Sai Mật Khẩu',
        icon: 'error',
        confirmButtonText: 'Thử Lại'
      });
      // this.toast.error('Sai Tên Đăng Nhập Hoặc Sai Mật Khẩu Hoặc Tài Khoản Chưa Được Kích Hoạt', 'Thông Báo ');
    });
  }
}
