package com.book.service.impl;

import com.book.model.Book;
import com.book.repository.IBookRepository;
import com.book.service.IBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService implements IBookService {

    @Autowired
    IBookRepository bookRepository;

    @Override
    public List<Book> findAll() {
        return bookRepository.findAll();
    }

    @Override
    public void save(Book book) {
        String code = bookRepository.getMaxCode();
        int temp = Integer.parseInt(code.substring(2));
        temp += 1;
        code = "MS" + String.format("%05d", temp);
        book.setCode(code);
        bookRepository.save(book);
    }

    @Override
    public Optional<Book> findById(Integer id) {
        return bookRepository.findById(id);
    }

    @Override
    public void delete(int id) {
        bookRepository.delete(id);
    }

    @Override
    public Page<Book> findAllAndSearch(Pageable pageable, String keyCategory, String keyName, String keyAuthor) {
        return bookRepository.findAllAndSearch(pageable, "%" + keyCategory + "%", "%" + keyName + "%", "%" + keyAuthor + "%");
    }

    @Override
    public List<Book> getBestSeller() {
        return bookRepository.getBestSeller();
    }
}
