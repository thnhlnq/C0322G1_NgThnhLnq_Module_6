package com.book.repository;

import com.book.dto.StatisticDto;
import com.book.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public interface IStatisticRepository extends JpaRepository<Book, Integer> {

    @Query(value = "select book.name, sum(cart_detail.quantity) as `quantity` " +
            "from `book` " +
            "join cart_detail on cart_detail.book_id = book.id " +
            "join cart on cart.id = cart_detail.cart_id " +
            "where cart.status = false and cart.create_date between :startDate and :endDate " +
            "group by book.id " +
            "order by `quantity` desc " +
            "limit 10", nativeQuery = true)
    List<StatisticDto> getStatistic(@Param("startDate") String startDate, @Param("endDate") String endDate);

    @Query(value = "select customer.name, sum(cart_detail.quantity) as `quantity` " +
            "from `book` " +
            "join cart_detail on cart_detail.book_id = book.id " +
            "join cart on cart.id = cart_detail.cart_id " +
            "join customer on customer.id = cart.customer_id " +
            "where cart.status = false " +
            "group by customer.id " +
            "order by `quantity` desc " +
            "limit 10", nativeQuery = true)
    List<StatisticDto> getStatisticCustomer();
}
