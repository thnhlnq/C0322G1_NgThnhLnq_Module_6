package com.book.repository;

import com.book.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface IBookRepository extends JpaRepository<Book, Integer> {
}
