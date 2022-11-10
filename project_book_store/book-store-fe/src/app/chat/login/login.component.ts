import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import firebase from 'firebase';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  nickname = '';
  ref = firebase.database().ref('users/');
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private title: Title
              ) {
    this.title.setTitle('Chat');
  }

  ngOnInit() {
    if (localStorage.getItem('nickname')) {
      this.router.navigate(['/chat/roomlist']).then();
    }
    this.loginForm = this.formBuilder.group({
      nickname: [null, Validators.required]
    });
  }

  onFormSubmit(form: any) {
    const login = form;
    this.ref.orderByChild('nickname').equalTo(login.nickname).once('value', snapshot => {
      if (snapshot.exists()) {
        localStorage.setItem('nickname', login.nickname);
        this.router.navigate(['/chat/roomlist']).then();
      } else {
        const newUser = firebase.database().ref('users/').push();
        newUser.set(login).then();
        localStorage.setItem('nickname', login.nickname);
        this.router.navigate(['/chat/roomlist']).then();
      }
    }).then();
  }
}
