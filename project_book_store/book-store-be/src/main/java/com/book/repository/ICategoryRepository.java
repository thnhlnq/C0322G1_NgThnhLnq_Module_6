package com.book.repository;

import com.book.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface ICategoryRepository extends JpaRepository<Category, Integer> {
}
