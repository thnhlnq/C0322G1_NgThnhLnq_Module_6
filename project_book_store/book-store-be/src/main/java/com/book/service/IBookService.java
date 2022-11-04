package com.book.service;

import com.book.model.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface IBookService {

    List<Book> findAll();

    void save(Book book);

    Optional<Book> findById(Integer id);

    void delete(int id);

    Page<Book> findAllAndSearch(Pageable pageable, String keyCategory, String keyName, String keyAuthor);

    List<Book> getBestSeller();
}
