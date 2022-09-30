import {Component, OnInit} from '@angular/core';
import {BookService} from '../service/book.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Book} from '../model/book';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  // bookForm: FormGroup = new FormGroup({
  //   id: new FormControl(''),
  //   code: new FormControl(''),
  //   author: new FormControl(''),
  //   description: new FormControl(''),
  //   dimension: new FormControl(''),
  //   image: new FormControl(''),
  //   name: new FormControl(''),
  //   price: new FormControl(''),
  //   publisher: new FormControl(''),
  //   quantity: new FormControl(''),
  //   releaseDate: new FormControl(''),
  //   totalPages: new FormControl(''),
  //   translator: new FormControl('')
  // });
  book: Book[] = [];
  bookForm: FormGroup;
  bookDetail: Book = {};
  id: number;

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
  }

  getDetails() {
    this.bookDetail = this.book[0];
  }

  getBook(id: number) {
    return this.bookService.findById(id).subscribe(book => {
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
      });
    });
  }
}
