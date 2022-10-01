package com.book.controller;

import com.book.model.Book;
import com.book.model.Category;
import com.book.model.Discount;
import com.book.service.IBookService;
import com.book.service.ICategoryService;
import com.book.service.IDiscountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/book")
public class BookController {

    @Autowired
    IBookService bookService;

    @Autowired
    ICategoryService categoryService;

    @Autowired
    IDiscountService discountService;

    @GetMapping("")
    public ResponseEntity<List<Book>> getAll() {
        List<Book> books = bookService.findAll();
        if (books.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(books, HttpStatus.OK);
    }

    @GetMapping("/category")
    public ResponseEntity<List<Category>> getCategories() {
        List<Category> categories = categoryService.findAll();
        if (categories.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(categories, HttpStatus.OK);
    }

    @GetMapping("/discount")
    public ResponseEntity<List<Discount>> getDiscount() {
        List<Discount> discounts = discountService.findAll();
        if (discounts.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(discounts, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Book> create(@RequestBody Book book) {
        bookService.save(book);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Book>> findById(@PathVariable Integer id) {
        Optional<Book> book = bookService.findById(id);
        if (!book.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(book, HttpStatus.OK);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Book> delete(@PathVariable Integer id) {
        List<Book> books = bookService.findAll();
        for (Book book : books) {
            if (Objects.equals(id, book.getId())) {
                bookService.delete(id);
                return new ResponseEntity<>(HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}
