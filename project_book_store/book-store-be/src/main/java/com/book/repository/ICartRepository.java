package com.book.repository;

import com.book.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public interface ICartRepository extends JpaRepository<Cart, Integer> {

    @Query(value = "select cart.* from cart join customer on customer.id = cart.customer_id where customer.id = :id", nativeQuery = true)
    List<Cart> findByCustomerId(@Param("id") Integer id);
}
