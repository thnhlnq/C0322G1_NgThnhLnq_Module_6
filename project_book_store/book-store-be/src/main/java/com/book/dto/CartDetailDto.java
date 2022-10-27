package com.book.dto;

import com.book.model.Book;

public class CartDetailDto {

    private int quantity;
    private Book book;

    public CartDetailDto() {
    }

    public CartDetailDto(int quantity, Book book) {
        this.quantity = quantity;
        this.book = book;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }
}
