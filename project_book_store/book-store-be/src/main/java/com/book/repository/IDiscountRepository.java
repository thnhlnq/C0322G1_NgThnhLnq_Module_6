package com.book.repository;

import com.book.model.Discount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public interface IDiscountRepository extends JpaRepository<Discount, Integer> {

    @Query(value = "select * from `discount`", nativeQuery = true)
    List<Discount> findAll();
}
