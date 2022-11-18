package com.book.controller;

import com.book.dto.BookDto;
import com.book.dto.CartDetailDto;
import com.book.dto.CartDto;
import com.book.dto.HistoryDto;
import com.book.model.*;
import com.book.service.*;
import com.book.service.impl.EmailService;
import freemarker.template.TemplateException;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.validation.Valid;
import java.io.IOException;
import java.time.LocalDate;
import java.util.LinkedList;
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
    ICustomerService customerService;

    @Autowired
    IUserService userService;

    @Autowired
    ICartService cartService;

    @Autowired
    ICartDetailService cartDetailService;

    @Autowired
    EmailService emailService;

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

    @GetMapping("/users")
    public ResponseEntity<List<Users>> getAllUsers() {
        List<Users> users = userService.findAll();
        if (users.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @PostMapping("/saveCart/{username}")
    public ResponseEntity<List<CartDetailDto>> saveCart(@PathVariable String username, @RequestBody List<CartDetailDto> cartDetails) throws MessagingException, IOException, TemplateException {
        Customer customer = customerService.findByUsername(username);
        Cart cart = new Cart();
        cart.setCreateDate(LocalDate.now());
        cart.setCustomer(customer);
        cart = cartService.save(cart);
        for (CartDetailDto item : cartDetails) {
            item.setBook(bookService.findById(item.getBook().getId()).get());
            CartDetail cartDetail = new CartDetail();
            cartDetail.setCart(cart);
            cartDetail.setBook(item.getBook());
            cartDetail.setQuantity(item.getQuantity());
            cartDetailService.save(cartDetail);
        }
//        userService.emailAfterPaypal(cart, cartDetails);
        emailService.sendEmail(cart, cartDetails);
        return new ResponseEntity<>(null, HttpStatus.CREATED);
    }

    @GetMapping("/history/{username}")
    public ResponseEntity<HistoryDto> getHistory(@PathVariable String username) {
        HistoryDto history = new HistoryDto();
        Customer customer = customerService.findHistoryByUsername(username);
        BeanUtils.copyProperties(customer, history);
        List<Cart> carts = cartService.findByCustomerId(history.getId());
        List<CartDto> cartDtos = new LinkedList<>();
        for (Cart cart : carts) {
            cartDtos.add(new CartDto(cart.getId(), cart.getCreateDate().toString()));
        }
        history.setCarts(cartDtos);
        for (CartDto item : history.getCarts()) {
            List<CartDetail> cartDetails = cartDetailService.findCartDetail(item.getId());
            List<CartDetailDto> cartDetailDtos = new LinkedList<>();
            for (CartDetail cartDetail : cartDetails) {
                cartDetailDtos.add(new CartDetailDto(cartDetail.getQuantity(), cartDetail.getBook()));
            }
            item.setCartDetails(cartDetailDtos);
        }
        return new ResponseEntity<>(history, HttpStatus.OK);
    }

    @PostMapping("/save/{username}")
    public ResponseEntity<List<CartDetailDto>> saveCartDetail(@PathVariable String username, @RequestBody List<CartDetailDto> cartDetailDtos) {
        Customer customer = customerService.findByUsername(username);
        Cart cart = cartService.findCart(customer.getId());
        if (cart == null) {
            cart = new Cart();
            cart.setCreateDate(LocalDate.now());
            cart.setCustomer(customer);
            cart.setStatus(true);
            cart = cartService.save(cart);
        } else {
            cartDetailService.deleteCartDetailByCartId(cart.getId());
        }
        for (CartDetailDto item : cartDetailDtos) {
            CartDetail cartDetail = new CartDetail();
            cartDetail.setCart(cart);
            cartDetail.setBook(item.getBook());
            cartDetail.setQuantity(item.getQuantity());
            cartDetailService.save(cartDetail);
        }
        return new ResponseEntity<>(null, HttpStatus.CREATED);
    }

    @GetMapping("/cart/{username}")
    public ResponseEntity<List<CartDetailDto>> getCartDetail(@PathVariable String username) {
        Customer customer = customerService.findHistoryByUsername(username);
        Cart cart = cartService.findCart(customer.getId());
        List<CartDetail> cartDetails = cartDetailService.findCartDetail(cart.getId());
        List<CartDetailDto> cartDetailDtos = new LinkedList<>();
        for (CartDetail cartDetail : cartDetails) {
            cartDetailDtos.add(new CartDetailDto(cartDetail.getQuantity(), cartDetail.getBook()));
        }
        return new ResponseEntity<>(cartDetailDtos, HttpStatus.OK);
    }

    @GetMapping("/best-seller")
    public ResponseEntity<List<Book>> getBestSeller() {
        List<Book> books = bookService.getBestSeller();
        if (books.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(books, HttpStatus.OK);
    }

    @GetMapping("/author/{author}")
    public ResponseEntity<List<Book>> getSameAuthor(@PathVariable String author) {
        List<Book> books = bookService.getSameAuthor(author);
        if (books.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(books, HttpStatus.OK);
    }
}
