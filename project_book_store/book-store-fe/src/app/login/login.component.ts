import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  // get emailInput() { return this.loginForm.get('email'); }
  // get passwordInput() { return this.loginForm.get('password'); }
  // loginForm: FormGroup | any;
  title = 'material-login';

  constructor() {
  }

  // constructor(private router: Router) {
  //   this.loginForm = new FormGroup({
  //     // email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$')]),
  //     // password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$')])
  //     email: new FormControl(''),
  //     password: new FormControl('')
  //   });
  // }

  ngOnInit(): void {
  }

  // onSubmit() {
  //   if (!this.loginForm.valid) {
  //     return;
  //   }
  //   localStorage.setItem('user', this.loginForm.value);
  //   this.router.navigate(['/book']);
  // }
}
