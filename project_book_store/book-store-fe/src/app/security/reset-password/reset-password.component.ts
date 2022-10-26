import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import Swal from 'sweetalert2';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  formGroup: FormGroup;
  isSubmitted = false;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private title: Title) {
    this.title.setTitle('Đặt Lại Mật Khẩu');
  }

  validationMessages = {
    username: [
      {type: 'required', message: 'Trường này không được để trống!'},
    ]
  };

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      username: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    this.authService.resetPassword(this.formGroup.value.username).subscribe(data => {
        Swal.fire('Thông Báo !!', 'Gửi Email Thành Công', 'success').then();
        console.log(data);
      }, err => {
        Swal.fire('Thông Báo !!', 'Sai Tên Đăng Nhập Hoặc Tên Đăng Nhập Chưa Được Đăng Ký', 'error').then();
        console.log(err);
        this.isSubmitted = false;
      }
    );
  }
}
