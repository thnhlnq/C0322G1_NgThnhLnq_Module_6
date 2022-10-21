package com.book.repository;

import com.book.model.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface IBookRepository extends JpaRepository<Book, Integer> {

    @Query(value = "select * from book where status = 0 order by book.id desc", nativeQuery = true)
    List<Book> findAll();

    @Query(value = "select * from book where id = :id", nativeQuery = true)
    Optional<Book> findById(@Param("id") Integer id);

    @Modifying
    @Query(value = "update book set status = 1 where id = :id", nativeQuery = true)
    void delete(int id);

    @Query(value = "select book.* from `book` " +
            "join `category` on `category`.id = `book`.category_id " +
            "where `book`.status = 0 and `category`.name like :keyCategory and `book`.name like :keyName and `book`.author like :keyAuthor " +
            " order by `book`.id desc ", nativeQuery = true)
    Page<Book> findAllAndSearch(Pageable pageable, @Param("keyCategory") String keyCategory, @Param("keyName") String keyName, @Param("keyAuthor") String keyAuthor);

    @Query(value = "select `code` from `book` where `code` = :code", nativeQuery = true)
    String existsCode(@Param("code") String code);
}
