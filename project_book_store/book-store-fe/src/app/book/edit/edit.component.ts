import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../model/category';
import {BookService} from '../../service/book.service';
import {CategoryService} from '../../service/category.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {formatDate} from '@angular/common';
import {finalize} from 'rxjs/operators';
import {Book} from '../../model/book';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  selectedImage: File = null;
  checkImgSize = false;
  regexImageUrl = false;
  editImageState = false;
  checkImg: boolean;
  url: any;
  msg = '';
  loader = true;

  bookForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    code: new FormControl(''),
    author: new FormControl(''),
    description: new FormControl(''),
    dimension: new FormControl(''),
    image: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(''),
    publisher: new FormControl(''),
    quantity: new FormControl(''),
    releaseDate: new FormControl(''),
    totalPages: new FormControl(''),
    translator: new FormControl(''),
    category: new FormControl(''),
  });

  id: number;
  categories: Category[] = [];

  constructor(private bookService: BookService,
              private categoryService: CategoryService,
              private storage: AngularFireStorage,
              private activatedRoute: ActivatedRoute,
              private toast: ToastrService,
              private router: Router,
              private title: Title) {
    this.title.setTitle('Chỉnh Sửa Sách');
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.id = +param.get('id');
      this.bookService.findById(this.id).subscribe(book => {
        this.bookForm = new FormGroup({
          id: new FormControl(book.id),
          code: new FormControl(book.code, [Validators.required]),
          author: new FormControl(book.author, [Validators.required]),
          description: new FormControl(book.description, [Validators.required]),
          dimension: new FormControl(book.dimension, [Validators.required]),
          image: new FormControl(book.image),
          name: new FormControl(book.name, [Validators.required]),
          price: new FormControl(book.price, [Validators.required, Validators.min(1)]),
          publisher: new FormControl(book.publisher, [Validators.required]),
          quantity: new FormControl(book.quantity, [Validators.required, Validators.min(1)]),
          releaseDate: new FormControl(book.releaseDate, [Validators.required]),
          totalPages: new FormControl(book.totalPages, [Validators.required, Validators.min(1)]),
          translator: new FormControl(book.translator, [Validators.required]),
          category: new FormControl(book.category, [Validators.required])
        });
      });
    });
  }

  getCurrentDateTime(): string {
    return formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss', 'en-US');
  }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(): void {
    this.categoryService.getAll().subscribe(category => {
      this.categories = category;
    });
  }

  compare(value, option): boolean {
    return value.id === option.id;
  }

  submit() {
    this.loader = false;
    let book: Book;
    if (this.editImageState === false) {
      book = {
        code: this.bookForm.value.code,
        author: this.bookForm.value.author,
        description: this.bookForm.value.description,
        dimension: this.bookForm.value.dimension,
        image: this.bookForm.value.image,
        name: this.bookForm.value.name,
        price: this.bookForm.value.price,
        publisher: this.bookForm.value.publisher,
        quantity: this.bookForm.value.quantity,
        releaseDate: this.bookForm.value.releaseDate,
        totalPages: this.bookForm.value.totalPages,
        translator: this.bookForm.value.translator,
        category: {
          id: this.bookForm.value.category.id,
          name: this.bookForm.value.category.name
        },
        status: false
      };
      this.bookService.edit(this.id, book).subscribe(() => {
        this.bookForm.reset();
        this.router.navigateByUrl('').then();
        Swal.fire('Thông Báo !!', 'Chỉnh Sửa Thành Công', 'success').then();
      }, e => {
        this.loader = true;
        Swal.fire('Thông Báo !!', 'Đã Có Lỗi Xảy Ra. Chỉnh Sửa Thất Bại', 'error').then();
        console.log(e);
      });
    } else {
      const nameImg = this.getCurrentDateTime() + this.selectedImage.name;
      const filePath = `book/${nameImg}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            this.bookForm.patchValue({image: url});
            book = {
              code: this.bookForm.value.code,
              author: this.bookForm.value.author,
              description: this.bookForm.value.description,
              dimension: this.bookForm.value.dimension,
              image: this.bookForm.value.image,
              name: this.bookForm.value.name,
              price: this.bookForm.value.price,
              publisher: this.bookForm.value.publisher,
              quantity: this.bookForm.value.quantity,
              releaseDate: this.bookForm.value.releaseDate,
              totalPages: this.bookForm.value.totalPages,
              translator: this.bookForm.value.translator,
              category: {
                id: this.bookForm.value.category.id,
                name: this.bookForm.value.category.name
              },
              status: false
            };
            this.bookService.edit(this.id, this.bookForm.value).subscribe(() => {
              this.bookForm.reset();
              this.router.navigateByUrl('').then();
              Swal.fire('Thông Báo !!', 'Chỉnh Sửa Thành Công', 'success').then();
            }, e => {
              this.loader = true;
              Swal.fire('Thông Báo !!', 'Đã Có Lỗi Xảy Ra. Chỉnh Sửa Thất Bại', 'error').then();
              console.log(e);
            });
          });
        })
      ).subscribe();
    }
  }

  reset(id: number) {
    this.selectedImage = null;
    this.checkImgSize = false;
    this.regexImageUrl = false;
    this.editImageState = false;
    this.checkImg = false;
    this.bookService.findById(id).subscribe(book => {
      this.bookForm = new FormGroup({
        id: new FormControl(book.id),
        code: new FormControl(book.code),
        author: new FormControl(book.author),
        description: new FormControl(book.description),
        dimension: new FormControl(book.dimension),
        image: new FormControl(book.image),
        name: new FormControl(book.name),
        price: new FormControl(book.price),
        publisher: new FormControl(book.publisher),
        quantity: new FormControl(book.quantity),
        releaseDate: new FormControl(book.releaseDate),
        totalPages: new FormControl(book.totalPages),
        translator: new FormControl(book.translator),
        category: new FormControl(book.category),
        // discount: new FormControl()
      });
    });
  }

  onFileSelected(event) {
    this.regexImageUrl = false;
    if (event.target.files[0].size > 9000000) {
      return;
    }
    this.selectedImage = event.target.files[0];
    if (!event.target.files[0].name.match('^.*\\.(jpg|JPG)$')) {
      this.regexImageUrl = true;
      return;
    }
    this.bookForm.patchValue({imageUrl: this.selectedImage.name});
  }

  selectFile(event: any) {
    if (!event.target.files[0] || event.target.files[0].length === 0) {
      return;
    }
    if (event.target.files[0].size > 9000000) {
      return;
    }
    if (!event.target.files[0].name.match('^.*\\.(jpg|JPG)$')) {
      return;
    }
    this.checkImgSize = false;
    this.checkImg = false;
    this.editImageState = true;

    const mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.msg = 'Chỉ có file ảnh được hỗ trợ';
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    // tslint:disable-next-line:variable-name
    reader.onload = (_event) => {
      this.msg = '';
      this.url = reader.result;
    };
  }
}
