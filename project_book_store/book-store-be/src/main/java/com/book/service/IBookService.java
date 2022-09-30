package com.book.service;

import com.book.model.Book;

import java.util.List;
import java.util.Optional;

public interface IBookService {

    List<Book> findAll();

    Optional<Book> findById(Integer id);
}
