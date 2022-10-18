import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {Book} from '../../model/book';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';
import {ShareService} from '../../service/share.service';
import {TokenStorageService} from '../../service/token-storage.service';
import Swal from 'sweetalert2';
import {CartService} from '../../service/cart.service';
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  username: string;
  currentUser: string;
  role: string;
  isLoggedIn = false;

  books: Book[] = [];
  categories: Category[] = [];

  book: Book;
  id: number;

  carts: any = this.cartService.getCart();
  totalPrice: number = this.cartService.getTotalPrice();
  totalQuantity: number = this.cartService.getTotalQuantity();

  constructor(private bookService: BookService,
              private cartService: CartService,
              private dataService: DataService,
              private categoryService: CategoryService,
              private shareService: ShareService,
              private tokenStorageService: TokenStorageService,
              private activatedRoute: ActivatedRoute,
              private title: Title) {
    this.title.setTitle('Chi Tiết Sách');
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.findById(this.id);
    });
    this.shareService.getClickEvent().subscribe(() => {
      this.loadHeader();
    });
  }

  ngOnInit(): void {
    this.loadHeader();
    this.getAll();
    this.getCategory();
  }

  findById(id: number) {
    return this.bookService.findById(id).subscribe(book => {
      this.book = book;
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

  getAll() {
    this.bookService.getList().subscribe(book => {
      this.books = book;
    });
  }

  getCategory(): void {
    this.categoryService.getAll().subscribe(category => {
      this.categories = category;
    });
  }

  onAddToCart(book: any) {
    const index = this.carts.findIndex((item: any) => {
      return item.id === book.id;
    });

    if (index >= 0) {
      return this.carts[index].quantity += 1;
    } else {
      const cartItem: any = {
        id: book.id,
        name: book.name,
        price: book.price,
        quantity: 1,
        image: book.image
      };
      this.carts.push(cartItem);
    }

    this.cartService.saveCart(this.carts);
    this.dataService.changeData({
      totalQuantity: this.cartService.getTotalQuantity()
    });
    Swal.fire({
      title: 'Thông Báo',
      text: 'Thêm Vào Giỏ Hàng Thành Công',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }

  updateQuantity(index: number, event: any) {
    let quantity = event.target.value;
    quantity = quantity > 0 ? quantity : 1;
    quantity = quantity <= 100 ? quantity : 100;
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
    increaseQuantity = increaseQuantity <= 100 ? increaseQuantity : 100;
    this.carts[index].quantity = increaseQuantity;
    this.cartService.saveCart(this.carts);
    this.totalPrice = this.cartService.getTotalPrice();
    this.totalQuantity = this.cartService.getTotalQuantity();
    this.dataService.changeData({
      quantity: this.cartService.getTotalQuantity()
    });
  }
}
