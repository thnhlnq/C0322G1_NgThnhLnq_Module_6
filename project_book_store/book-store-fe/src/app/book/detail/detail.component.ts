import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {Book} from '../../model/book';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';
import {ShareService} from '../../service/share.service';
import {TokenStorageService} from '../../service/token-storage.service';

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

  id: number;
  code: string;
  author: string;
  description: string;
  dimension: string;
  image: string;
  name: string;
  price: number;
  publisher: string;
  quantity: number;
  releaseDate: string;
  totalPages: number;
  translator: string;

  constructor(private bookService: BookService,
              private categoryService: CategoryService,
              private shareService: ShareService,
              private tokenStorageService: TokenStorageService,
              private activatedRoute: ActivatedRoute,
              private title: Title) {
    this.title.setTitle('Chi Tiết Sách');
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getDetail(this.id);
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

  getDetail(id: number) {
    return this.bookService.findById(id).subscribe(book => {
      this.id = book.id;
      this.code = book.code;
      this.author = book.author;
      this.description = book.description;
      this.dimension = book.dimension;
      this.image = book.image;
      this.name = book.name;
      this.price = book.price;
      this.publisher = book.publisher;
      this.quantity = book.quantity;
      this.releaseDate = book.releaseDate;
      this.totalPages = book.totalPages;
      this.translator = book.translator;
      console.log(book);
    });
  }
}
