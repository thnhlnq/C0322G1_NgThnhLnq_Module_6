import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.bookService.getAll().subscribe(book => {
      this.books = book;
    });
  }
}
