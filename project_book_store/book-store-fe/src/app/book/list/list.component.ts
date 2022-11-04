import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {ToastrService} from 'ngx-toastr';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';
import {Title} from '@angular/platform-browser';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../../service/data.service';
import {CartService} from '../../service/cart.service';
import {ShareService} from '../../service/share.service';
import {TokenStorageService} from '../../service/token-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  username: string;
  currentUser: string;
  role: string;
  isLoggedIn = false;

  searchForm: FormGroup = new FormGroup({
    author: new FormControl('', [Validators.pattern('^[a-zA-Z0-9]+$')]),
    name: new FormControl('', [Validators.pattern('^[a-zA-Z0-9]+$')]),
    category: new FormGroup({
      name: new FormControl('')
    })
  });

  books: Book[] = [];
  bookSellers: Book[] = [];
  categories: Category[] = [];
  carts: any = this.bookService.getCart();

  id: number;
  name: string;
  author: string;

  categorySearch = '';
  nameSearch = '';
  authorSearch = '';
  number: number;
  indexPagination = 0;
  totalPage?: string[] = [];
  numberOfElement = 0;
  totalElements = 0;
  pageSize: number;
  previousPageStyle = 'inline-block';
  nextPageStyle = 'inline-block';

  constructor(private bookService: BookService,
              private categoryService: CategoryService,
              private cartService: CartService,
              private dataService: DataService,
              private shareService: ShareService,
              private tokenStorageService: TokenStorageService,
              private toast: ToastrService,
              private title: Title) {
    this.title.setTitle('Trang Chủ');
    this.shareService.getClickEvent().subscribe(() => {
      this.loadHeader();
    });
  }

  ngOnInit(): void {
    this.loadHeader();
    this.getCategory();
    this.searchBook();
    this.getListSearch();
    this.getBestSeller();
    this.dataService.changeData({
      quantity: this.cartService.getTotalQuantity()
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

  getCategory(): void {
    this.categoryService.getAll().subscribe(category => {
      this.categories = category;
    });
  }

  delete(id: number, name: string, author: string): void {
    Swal.fire({
      title: 'Thông Báo !!',
      text: 'Bạn Muốn Xoá Sách ' + name + ' Của Tác Giả ' + author + ' Không ?!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3F51B5',
      cancelButtonColor: '#F44336',
      confirmButtonText: 'Đồng Ý'
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.bookService.delete(id).subscribe(() => {
          Swal.fire('Thông Báo !!', 'Xoá Thành Công', 'success').then();
          this.getListSearch();
        }, e => {
          Swal.fire('Thông Báo !!', 'Đã Có Lỗi Xảy Ra. Vui Lòng Thử Lại', 'error').then();
          console.log(e);
        });
      }
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
        image: book.image,
      };
      this.carts.push(cartItem);
    }

    this.cartService.saveCart(this.carts);
    this.dataService.changeData({
      quantity: this.cartService.getTotalQuantity()
    });
    Swal.fire('Thông Báo !!', 'Thêm Vào Giỏ Hàng Thành Công', 'success').then();
  }

  getListSearch() {
    this.bookService.getAll(this.indexPagination, this.categorySearch, this.nameSearch,
      this.authorSearch, this.pageSize).subscribe((data?: any) => {
      if (data === null) {
        this.totalPage = new Array(0);
        this.books = [];
        // this.displayPagination = 'none';
        Swal.fire('Thông Báo !!', 'Không Tìm Thấy Kết Quả. Vui Lòng Thử Lại', 'error').then();
      } else {
        this.number = data?.number;
        this.pageSize = data?.size;
        this.numberOfElement = data?.numberOfElements;
        this.books = data?.content;
        this.totalElements = data?.totalElements;
        this.totalPage = new Array(+data.totalPages);
      }
      this.checkPreviousAndNext();
    }, error => {
      this.books = null;
      console.log(error);
    });
  }

  searchBook() {
    this.categorySearch = this.searchForm.value.category.name;
    this.authorSearch = this.searchForm.value.author;
    this.nameSearch = this.searchForm.value.name;
    this.getListSearch();
  }

  previousPage(event: any) {
    event.preventDefault();
    this.indexPagination--;
    this.ngOnInit();
  }

  nextPage(event: any) {
    event.preventDefault();
    this.indexPagination++;
    this.ngOnInit();
  }

  checkPreviousAndNext() {
    if (this.indexPagination === 0) {
      this.previousPageStyle = 'none';
    } else if (this.indexPagination !== 0) {
      this.previousPageStyle = 'inline-block';
    }
    if (this.indexPagination < (this.totalPage.length - 1)) {
      this.nextPageStyle = 'inline-block';
    } else if (this.indexPagination === (this.totalPage.length - 1) || this.indexPagination > (this.totalPage.length - 1)) {
      this.nextPageStyle = 'none';
    }
  }

  totalElement($event: any) {
    switch ($event.target.value) {
      case '8':
        this.pageSize = 8;
        this.indexPagination = 0;
        this.ngOnInit();
        break;
      case '16':
        this.pageSize = 16;
        this.indexPagination = 0;
        this.ngOnInit();
        break;
      case '24':
        this.pageSize = 24;
        this.indexPagination = 0;
        this.ngOnInit();
        break;
      case 'full':
        this.pageSize = this.totalElements;
        this.indexPagination = 0;
        this.ngOnInit();
        break;
    }
  }

  getBestSeller(): void {
    this.bookService.getBestSeller().subscribe(next => {
      this.bookSellers = next;
    });
  }
}
