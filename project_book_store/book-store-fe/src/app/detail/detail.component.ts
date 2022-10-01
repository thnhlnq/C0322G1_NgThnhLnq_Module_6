import {Component, OnInit} from '@angular/core';
import {BookService} from '../service/book.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

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
  totalPages: string;
  translator: string;

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              private title: Title) {
    this.title.setTitle('Chi Tiết Sách');
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getDetail(this.id);
    });
  }

  ngOnInit(): void {
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
