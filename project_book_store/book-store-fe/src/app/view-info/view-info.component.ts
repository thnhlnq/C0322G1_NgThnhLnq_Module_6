import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../service/token-storage.service';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-view-info',
  templateUrl: './view-info.component.html',
  styleUrls: ['./view-info.component.css']
})
export class ViewInfoComponent implements OnInit {

  customer: any;
  username: string;
  users: any = [];

  constructor(private tokenStorageService: TokenStorageService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.loadHeader();
    this.getUsers();
    this.userService.getCustomer(this.username).subscribe(customers => {
      this.customer = customers;
    });
  }

  getUsers(): void {
    this.userService.getAll().subscribe(user => {
      this.users = user;
    });
  }

  loadHeader(): void {
    if (this.tokenStorageService.getToken()) {
      this.username = this.tokenStorageService.getUser().username;
    }
  }
}
