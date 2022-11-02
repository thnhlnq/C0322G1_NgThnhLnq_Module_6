package com.book.repository;

import com.book.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;

@Repository
@Transactional
public interface ICustomerRepository extends JpaRepository<Customer, Integer> {

    @Query(value = "select * from customer where status = 0", nativeQuery = true)
    List<Customer> findAll();

    @Query(value = "select customer.*, users.* from customer join users on customer.users_id = users.id where users.username = :username", nativeQuery = true)
    Customer findByUsername(@Param("username") String username);

    @Modifying
    @Query(value = "insert into customer (`name`, `address`, `birthday`, `gender`, `phone`, `status`, `users_id`) values (:name, :address, :birthday, :gender, :phone, 0, :userId)", nativeQuery = true)
    void save(@Param("name") String name, @Param("address") String address, @Param("birthday") LocalDate birthday, @Param("gender") String gender, @Param("phone") String phone, @Param("userId") int userId);

    @Query(value = "select customer.* from customer join users on users.id = customer.users_id where users.username = :username", nativeQuery = true)
    Customer findHistoryByUsername(@Param("username") String username);
}
