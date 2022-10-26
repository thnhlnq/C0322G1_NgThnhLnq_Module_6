import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';
import {ToastrService} from 'ngx-toastr';
import Swal from 'sweetalert2';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-verity-reset-password',
  templateUrl: './verity-reset-password.component.html',
  styleUrls: ['./verity-reset-password.component.css']
})
export class VerityResetPasswordComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private toastr: ToastrService,
              private router: Router,
              private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private title: Title) {
    this.title.setTitle('Xác Nhận Mật Khẩu');
  }

  hide = true;
  formGroup: FormGroup;
  name: string;
  isSuccessful = true;
  isSendMail: boolean;
  isSubmited: false;

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]],
      repeatNewPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]],
    });
    this.route.queryParams.subscribe(params => {
      const code = params.code;
      if (code == null) {
        this.isSendMail = false;
      } else {
        this.isSendMail = true;
        this.isSuccessful = false;
      }
    });
  }

  onSubmit() {
    if (this.formGroup.value.newPassword !== '' && this.formGroup.value.repeatNewPassword !== '') {
      if (this.formGroup.value.newPassword === this.formGroup.value.repeatNewPassword) {
        this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
          this.name = paramMap.get('name');
        });
        this.authService.doResetPassword(this.formGroup.value.newPassword, this.name).subscribe(data => {
          Swal.fire('Thông Báo !!', 'Mật Khẩu Đã Được Thay Đổi', 'success').then();
          this.router.navigateByUrl('/login').then();
        });
      } else {
        Swal.fire('Thông Báo !!', 'Trường Nhập Lại Mật Khẩu Và Mật Khẩu Không Giống Nhau', 'error').then();
        this.isSubmited = false;
      }
    }
  }
}
