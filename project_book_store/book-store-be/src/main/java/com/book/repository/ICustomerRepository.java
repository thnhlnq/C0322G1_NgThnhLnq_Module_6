package com.book.repository;

import com.book.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface ICustomerRepository extends JpaRepository<Customer, Integer> {

    @Query(value = "select customer.*, users.* from customer join users on customer.users_id = users.id where users.username = :username", nativeQuery = true)
    Customer findByUsername(@Param("username") String username);
}
