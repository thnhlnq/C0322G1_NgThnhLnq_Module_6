package com.book.repository;

import com.book.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public interface ICategoryRepository extends JpaRepository<Category, Integer> {

    @Query(value = "select * from `category`", nativeQuery = true)
    List<Category> findAll();
}
