import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TokenStorageService} from '../service/token-storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ShareService} from '../service/share.service';
import {AuthService} from '../service/auth.service';
import Swal from 'sweetalert2';
import {Title} from '@angular/platform-browser';

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
              private title: Title) {
    this.title.setTitle('Đăng Nhập');
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

  onSubmit(): void {
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
      this.router.navigateByUrl(this.returnUrl).then();
      Swal.fire('Thông Báo !!', 'Đăng Nhập Thành Công', 'success').then();
      this.shareService.sendClickEvent();
    }, err => {
      this.authService.isLoggedIn = false;
      Swal.fire('Thông Báo !!', 'Đã Có Lỗi Xảy Ra. Sai Tên Đăng Nhập Hoặc Sai Mật Khẩu', 'error').then();
      console.log(err);
    });
  }
}
