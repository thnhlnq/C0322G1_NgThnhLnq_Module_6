import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {CartService} from '../service/cart.service';
import {DataService} from '../service/data.service';
import {Book} from '../model/book';
import {render} from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts: any = [];
  book: Book;

  totalPrice: number = this.cartService.getTotalPrice();
  totalQuantity: number = this.cartService.getTotalQuantity();

  constructor(private cartService: CartService,
              private dataService: DataService) {
  }

  ngOnInit(): void {
    // tslint:disable-next-line:variable-name
    const _this = this;
    setTimeout(() => {
      _this.dataService.changeData({
        quantity: _this.cartService.getTotalQuantity()
      });
    }, 1);
    this.carts = this.cartService.getCart();
    this.dataService.changeData({
      quantity: this.cartService.getTotalQuantity()
    });
  }

  total(cart: any) {
    return cart.quantity * cart.price;
  }

  updateQuantity(index: number, event: any) {
    let quantity = parseInt(event.target.value, 10);
    quantity = quantity > 0 ? quantity : 1;
    quantity = quantity <= 999 ? quantity : 999;
    event.target.value = quantity;
    this.carts[index].quantity = quantity;
    this.cartService.saveCart(this.carts);
    this.totalPrice = this.cartService.getTotalPrice();
    this.totalQuantity = this.cartService.getTotalQuantity();
    this.dataService.changeData({
      quantity: this.cartService.getTotalQuantity()
    });
  }

  decrease(index: number, quantity: any) {
    let decreaseQuantity = parseInt(quantity, 10) - 1;
    decreaseQuantity = decreaseQuantity > 0 ? decreaseQuantity : 1;
    this.carts[index].quantity = decreaseQuantity;
    this.cartService.saveCart(this.carts);
    this.totalPrice = this.cartService.getTotalPrice();
    this.totalQuantity = this.cartService.getTotalQuantity();
    this.dataService.changeData({
      quantity: this.cartService.getTotalQuantity()
    });
  }

  increase(index: number, quantity: any) {
    let increaseQuantity = parseInt(quantity, 10) + 1;
    increaseQuantity = increaseQuantity <= 999 ? increaseQuantity : 999;
    this.carts[index].quantity = increaseQuantity;
    this.cartService.saveCart(this.carts);
    this.totalPrice = this.cartService.getTotalPrice();
    this.totalQuantity = this.cartService.getTotalQuantity();
    this.dataService.changeData({
      quantity: this.cartService.getTotalQuantity()
    });
  }

  deleteCart(index: number) {
    // tslint:disable-next-line:variable-name
    const _this = this;
    Swal.fire({
      title: 'Thông Báo !!',
      text: 'Bạn Muốn Xoá Sản Phẩm Này Khỏi Giỏ Hàng ?!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3F51B5',
      cancelButtonColor: '#F44336',
      confirmButtonText: 'Đồng Ý'
    }).then((result: any) => {
      if (result.isConfirmed) {
        Swal.fire('Thông Báo !!', 'Đã Xoá Sản Phẩm Khỏi Giỏ Hàng.', 'success').then();
        _this.carts.splice(index, 1);
        _this.cartService.saveCart(_this.carts);
        this.totalPrice = this.cartService.getTotalPrice();
        this.totalQuantity = this.cartService.getTotalQuantity();
        this.dataService.changeData({
          quantity: this.cartService.getTotalQuantity()
        });
      }
    });
  }

  // deleteAll() {
  //   Swal.fire({
  //     title: 'Thông Báo !!',
  //     text: 'Bạn Muốn Xoá Tất Cả Sản Phẩm Khỏi Giỏ Hàng ?!',
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Đồng Ý'
  //   }).then((result: any) => {
  //     if (result.isConfirmed) {
  //       Swal.fire('Thông Báo !!', 'Đã Xoá Tất Cả Sản Phẩm Khỏi Giỏ Hàng.', 'success').then();
  //       sessionStorage.clear();
  //       this.carts = [];
  //       this.carts.saveCart(this.carts);
  //       this.totalPrice = this.cartService.getTotalPrice();
  //       this.totalQuantity = this.cartService.getTotalQuantity();
  //       this.dataService.changeData({
  //         quantity: this.cartService.getTotalQuantity()
  //       });
  //     }
  //   });
  // }

  payment() {
    document.getElementById('paypal').innerHTML = '<div id="btnPayPal"></div>';
    render({
      id: '#paypal',
      currency: 'USD',
      value: String((this.totalPrice / 23000).toFixed(2)),
      onApprove: (details) => {
        Swal.fire('Thông Báo !!', 'Thanh Toán Thành Công. Sách Của Bạn Sẽ Được Giao Trong Vòng 3 Ngày Tới', 'success').then();
        document.getElementById('close').click();
        this.carts = [];
        this.cartService.saveCart(this.carts);
        this.dataService.changeData({
          quantity: this.cartService.getTotalQuantity()
        });
      }
    });
  }
}
