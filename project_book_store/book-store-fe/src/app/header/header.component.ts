import {Component, OnInit} from '@angular/core';
import {CartService} from '../service/cart.service';
import {DataService} from '../service/data.service';
import {ShareService} from '../service/share.service';
import {TokenStorageService} from '../service/token-storage.service';
import {SocialAuthService, SocialUser} from 'angularx-social-login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string;
  currentUser: string;
  role: string;
  isLoggedIn = false;
  totalQuantity: any = 0;

  socialUser!: SocialUser;
  isLoggedin?: boolean;

  ngOnInit(): void {
    this.dataService.getData.subscribe((result: any) => {
      this.totalQuantity = parseInt(result.quantity, 10);
    });
    this.loadHeader();
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
    });
  }

  constructor(private tokenStorageService: TokenStorageService,
              private shareService: ShareService,
              private cartService: CartService,
              private socialAuthService: SocialAuthService,
              private dataService: DataService) {
    this.shareService.getClickEvent().subscribe(() => {
      this.loadHeader();
    });
  }

  loadHeader(): void {
    if (this.tokenStorageService.getToken()) {
      this.currentUser = this.tokenStorageService.getUser().username;
      this.role = this.tokenStorageService.getUser().roles[0];
      this.username = this.tokenStorageService.getUser().username;
    }
    this.isLoggedIn = this.username != null;
  }

  logOut(): void {
    this.isLoggedIn = false;
    this.tokenStorageService.signOut();
    this.socialAuthService.signOut().then();
    this.dataService.changeData({
      quantity: this.cartService.getTotalQuantity()
    });
  }
}
