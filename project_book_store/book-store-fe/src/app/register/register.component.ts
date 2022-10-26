import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide = true;
  loader = true;

  constructor(private title: Title) {
    this.title.setTitle('Đăng Ký Tài Khoản');
  }

  ngOnInit(): void {
  }

}
