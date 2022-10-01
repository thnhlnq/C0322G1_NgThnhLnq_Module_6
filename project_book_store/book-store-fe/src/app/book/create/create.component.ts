import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Category} from '../../model/category';
import {Discount} from '../../model/discount';
import {BookService} from '../../service/book.service';
import {CategoryService} from '../../service/category.service';
import {DiscountService} from '../../service/discount.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage';
import {formatDate} from '@angular/common';
import {Title} from '@angular/platform-browser';
import {finalize} from 'rxjs/operators';
import {Book} from '../../model/book';

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
  isExitsCode = false;

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
    status: new FormControl(0),
    category: new FormControl(''),
    discount: new FormControl('')
  });

  categories: Category[] = [];
  discounts: Discount[] = [];

  constructor(private bookService: BookService,
              private categoryService: CategoryService,
              private discountService: DiscountService,
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
    this.getDiscount();
  }

  getCategory(): void {
    this.categoryService.getAll().subscribe(category => {
      this.categories = category;
    });
  }

  getDiscount(): void {
    this.discountService.getAll().subscribe(discount => {
      this.discounts = discount;
    });
  }

  // submit(): void {
  //   const book = this.bookForm.value;
  //   this.categoryService.findById(book.category).subscribe(category => {
  //     book.category = {
  //       id: category.id,
  //       name: category.name
  //     };
  //     this.bookService.save(book).subscribe(() => {
  //       this.bookForm.reset();
  //       this.toast.success('Thêm Sách Thành Công..', 'Thông Báo');
  //       this.router.navigate(['']);
  //     }, e => {
  //       console.log(e);
  //     });
  //   });
  // }

  submit() {
    this.loader = false;
    const nameImg = this.getCurrentDateTime() + this.selectedImage.name;
    const filePath = `employee/${nameImg}`;
    const fileRef = this.storage.ref(filePath);
    // const book = this.bookForm.value;
    let book: Book;
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
            category: this.bookForm.value.category,
            discount: this.bookForm.value.discount
            // category: {
            //   id: this.bookForm.value.category.id,
            //   password: this.employeeForm.value.password,
            //   email: this.employeeForm.value.email,
            // }
          };
          console.log(book);
          this.bookService.save(book).subscribe(() => {
            this.bookForm.reset();
            this.toast.success('Thêm Sách Thành Công..', 'Thông Báo');
            this.router.navigateByUrl('');
          }, e => {
            console.log(e);
          });
        });
      })
    ).subscribe();
  }

// checkCode($event: Event) {
//   this.employeeService.checkCode(String($event)).subscribe(value => {
//       if (value) {
//         this.isExitsCode = true;
//       } else {
//         this.isExitsCode = false;
//       }
//     }
//   );
// }

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
