package com.book.repository;

import com.book.model.Discount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface IDiscountRepository extends JpaRepository<Discount, Integer> {
}
