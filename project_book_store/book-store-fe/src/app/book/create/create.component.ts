import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../model/category';
import {BookService} from '../../service/book.service';
import {CategoryService} from '../../service/category.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage';
import {formatDate} from '@angular/common';
import {Title} from '@angular/platform-browser';
import {finalize} from 'rxjs/operators';
import {Book} from '../../model/book';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

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
    // code: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    dimension: new FormControl('', [Validators.required]),
    image: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.min(1)]),
    publisher: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required, Validators.min(1)]),
    releaseDate: new FormControl('', [Validators.required]),
    totalPages: new FormControl('', [Validators.required, Validators.min(1)]),
    translator: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
  });

  categories: Category[] = [];

  constructor(private bookService: BookService,
              private categoryService: CategoryService,
              private storage: AngularFireStorage,
              private toast: ToastrService,
              private router: Router,
              private title: Title) {
    this.title.setTitle('Thêm Mới Sách');
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

  submit() {
    this.loader = false;
    const nameImg = this.getCurrentDateTime() + this.selectedImage.name;
    const filePath = `book/${nameImg}`;
    const fileRef = this.storage.ref(filePath);
    // const book = this.bookForm.value;
    let book: Book;
    this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.bookForm.patchValue({image: url});
          book = {
            // code: this.bookForm.value.code,
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
            category: this.bookForm.value.category,
            // category: {
            //   id: this.bookForm.value.category,
            // },
            status: false
          };
          this.bookService.save(book).subscribe(() => {
            this.bookForm.reset();
            this.router.navigateByUrl('').then();
            Swal.fire('Thông Báo !!', 'Thêm Mới Thành Công', 'success').then();
          }, e => {
            this.loader = true;
            Swal.fire('Thông Báo !!', 'Đã Có Lỗi Xảy Ra. Thêm Mới Thất Bại', 'error').then();
            console.log(e);
          });
        });
      })
    ).subscribe();
  }

  reset() {
    this.bookForm.reset();
    this.selectedImage = null;
    this.checkImgSize = false;
    this.regexImageUrl = false;
    this.editImageState = false;
    this.checkImg = false;
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
