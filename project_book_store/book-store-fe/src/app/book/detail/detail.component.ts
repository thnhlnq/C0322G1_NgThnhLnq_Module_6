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
    this.dataService.changeData({
      quantity: this.cartService.getTotalQuantity()
    });
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

  getAll(): void {
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
      this.carts[index].quantity += 1;
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
      quantity: this.cartService.getTotalQuantity()
    });
    Swal.fire('Thông Báo !!', 'Thêm Vào Giỏ Hàng Thành Công', 'success').then();
  }
}
