package com.book.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Entity
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private LocalDate createDate;
    private boolean status;

    @JsonBackReference
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "customer_id", referencedColumnName = "id")
    private Customer customer;

    @OneToMany(mappedBy = "cart")
    @JsonIgnore
    private List<CartDetail> cartDetails;

//    @Type(type = "json")
//    private Map<Book, Integer> books = new HashMap<>();

    public Cart() {
    }

    public Cart(Integer id, LocalDate createDate, boolean status, Customer customer, List<CartDetail> cartDetails) {
        this.id = id;
        this.createDate = createDate;
        this.status = status;
        this.customer = customer;
        this.cartDetails = cartDetails;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public LocalDate getCreateDate() {
        return createDate;
    }

    public void setCreateDate(LocalDate createDate) {
        this.createDate = createDate;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public List<CartDetail> getCartDetails() {
        return cartDetails;
    }

    public void setCartDetails(List<CartDetail> cartDetails) {
        this.cartDetails = cartDetails;
    }

//    public Cart(Map<Book, Integer> books) {
//        this.books = books;
//    }
//
//    public Map<Book, Integer> getBooks() {
//        return books;
//    }
//
//    // kiểm tra xem sản phẩm đó đã có trong giỏ hàng hay chưa.
//    private boolean checkItemInCart(Book book) {
//        for (Map.Entry<Book, Integer> entry : books.entrySet()) {
//            if (entry.getKey().getId().equals(book.getId())) {
//                return true;
//            }
//        }
//        return false;
//    }
//
//    private Map.Entry<Book, Integer> selectItemInCart(Book book) {
//        for (Map.Entry<Book, Integer> entry : books.entrySet()) {
//            if (entry.getKey().getId().equals(book.getId())) {
//                return entry;
//            }
//        }
//        return null;
//    }
//
//    // thêm sản phẩm vào trong giỏ hàng.
//    public void addBook(Book book) {
//        if (!checkItemInCart(book)) {
//            books.put(book, 1);
//        } else {
//            Map.Entry<Book, Integer> itemEntry = selectItemInCart(book);
//            Integer newQuantity = itemEntry.getValue() + 1;
//            books.replace(itemEntry.getKey(), newQuantity);
//        }
//    }
//
//    // xoá sản phẩm trong giỏ hàng.
//    public void removeBook(Book book) throws Exception {
//        if (!checkItemInCart(book)) {
//            books.put(book, 1);
//        } else {
//            Map.Entry<Book, Integer> itemEntry = selectItemInCart(book);
//            Integer newQuantity = itemEntry.getValue() - 1;
//            books.replace(itemEntry.getKey(), newQuantity);
//            if (newQuantity <= -1) {
//                books.replace(itemEntry.getKey(), 0);
//                throw new Exception();
//            }
//        }
//    }
//
//    // đếm số lượng sản phẩm đó hiện có trong giỏ hàng.
//    public Integer countBookQuantity() {
//        Integer productQuantity = 0;
//        for (Map.Entry<Book, Integer> entry : books.entrySet()) {
//            productQuantity += entry.getValue();
//        }
//        return productQuantity;
//    }
//
//    // đếm số lượng sản phẩm có trong giỏ hàng.
//    public Integer countItemQuantity() {
//        return books.size();
//    }
//
//    // tổng số tiền cần phải thanh toán.
//    public Float countTotalPayment() {
//        float payment = 0;
//        for (Map.Entry<Book, Integer> entry : books.entrySet()) {
//            payment += entry.getKey().getPrice() * (float) entry.getValue();
//        }
//        return payment;
//    }
}
