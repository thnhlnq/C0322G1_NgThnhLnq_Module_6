import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-book',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  books: Book[] = [];

  id: number;

  name: string;

  constructor(private bookService: BookService,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.bookService.getAll().subscribe(book => {
      this.books = book;
    });
  }

  openDelete(id: number, name: string): void {
    this.id = id;
    this.name = name;
  }

  delete(id: number): void {
    this.bookService.delete(id).subscribe(() => {
      this.toast.success('Xoá Sách Thành Công..', 'Thông Báo');
      this.getAll();
    }, e => {
      console.log(e);
    });
  }
}
