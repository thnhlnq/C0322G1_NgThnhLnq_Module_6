package com.book.controller;

import com.book.dto.BookDto;
import com.book.model.*;
import com.book.service.*;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/public/book")
public class BookController {

    @Autowired
    IBookService bookService;

    @Autowired
    ICategoryService categoryService;

    @Autowired
    IDiscountService discountService;

    @Autowired
    ICustomerService customerService;

    @Autowired
    IUserService userService;

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
    public ResponseEntity<Object> create(@RequestBody @Valid BookDto bookDto) {

        Book book = new Book();

        BeanUtils.copyProperties(bookDto, book);

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

    @PutMapping("/edit/{id}")
    public ResponseEntity<Book> update(@PathVariable int id, @Valid @RequestBody BookDto bookDto) {

        Optional<Book> book = bookService.findById(id);

        if (!book.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        book.get().setCode(bookDto.getCode());
        book.get().setAuthor(bookDto.getAuthor());
        book.get().setDescription(bookDto.getDescription());
        book.get().setDimension(bookDto.getDimension());
        book.get().setImage(bookDto.getImage());
        book.get().setName(bookDto.getName());
        book.get().setPrice(bookDto.getPrice());
        book.get().setPublisher(bookDto.getPublisher());
        book.get().setQuantity(bookDto.getQuantity());
        book.get().setReleaseDate(bookDto.getReleaseDate());
        book.get().setTotalPages(bookDto.getTotalPages());
        book.get().setTranslator(bookDto.getTranslator());
        book.get().setCategory(bookDto.getCategory());
        bookService.save(book.get());

        return new ResponseEntity<>(book.get(), HttpStatus.OK);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Book> delete(@PathVariable Integer id) {
        Optional<Book> book = bookService.findById(id);
        if (!book.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        bookService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<Page<Book>> findAllAndSearch(@PageableDefault(value = 8) Pageable pageable,
                                                       @RequestParam Optional<String> keyCategory,
                                                       @RequestParam Optional<String> keyName,
                                                       @RequestParam Optional<String> keyAuthor) {
        String categorySearch = keyCategory.orElse("");
        String nameSearch = keyName.orElse("");
        String authorSearch = keyAuthor.orElse("");
        Page<Book> bookPage = bookService.findAllAndSearch(pageable, categorySearch, nameSearch, authorSearch);
        if (bookPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(bookPage, HttpStatus.OK);
    }

    @PostMapping("/{username}")
    public ResponseEntity<Customer> findByUsername(@PathVariable String username) {
        Customer customer = customerService.findByUsername(username);
        if (customer == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(customer, HttpStatus.OK);
    }

    @GetMapping("/checkCode/{code}")
    public ResponseEntity<?> checkCode(@PathVariable("code") String code) {
        return new ResponseEntity<>(bookService.existsCode(code), HttpStatus.OK);
    }

    @GetMapping("/users")
    public ResponseEntity<List<Users>> getAllUsers() {
        List<Users> users = userService.findAll();
        if (users.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
}
