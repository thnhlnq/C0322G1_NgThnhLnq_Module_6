package com.book.repository;

import com.book.dto.StatisticByMonthDto;
import com.book.dto.StatisticByWeekDto;
import com.book.dto.StatisticByYearDto;
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

    @Query(value = "select sum(book.price * cart_detail.quantity) as `price`, " +
            "sum(cart_detail.quantity) as `quantity`, " +
            "week(cart.create_date) as `week`, " +
            "month(cart.create_date) as `month`, " +
            "year(cart.create_date) as `year`, " +
            "book.name as `time` " +
            "from `book` " +
            "join cart_detail on cart_detail.book_id = book.id " +
            "join cart on cart.id = cart_detail.cart_id " +
            "where (cart.create_date > date(:startTime)) " +
            "and (cart.create_date < date(:endTime)) " +
            "group by book.id " +
            "order by quantity desc " +
            "limit 10", nativeQuery = true)
    List<StatisticByWeekDto> getStatisticByWeek(@Param("startTime") String startTime, @Param("endTime") String endTime);

    @Query(value = "select sum(book.price * cart_detail.quantity) as `price`, " +
            "sum(cart_detail.quantity) as `quantity`, " +
            "month(cart.create_date) as `month`, " +
            "year(cart.create_date) as `year`, " +
            "book.name as `time` " +
            "from `book` " +
            "join cart_detail on cart_detail.book_id = book.id " +
            "join cart on cart.id = cart_detail.cart_id " +
            "where (cart.create_date > date(:startTime)) " +
            "and (cart.create_date < date(:endTime)) " +
            "group by book.id " +
            "order by quantity desc " +
            "limit 10", nativeQuery = true)
    List<StatisticByMonthDto> getStatisticByMonth(@Param("startTime") String startTime, @Param("endTime") String endTime);

    @Query(value = "select sum(book.price * cart_detail.quantity) as `price`, " +
            "sum(cart_detail.quantity) as `quantity`, " +
            "year(cart.create_date) as `year`, " +
            "book.name as `time` " +
            "from `book` " +
            "join cart_detail on cart_detail.book_id = book.id " +
            "join cart on cart.id = cart_detail.cart_id " +
            "where (cart.create_date > date(:startTime)) " +
            "and (cart.create_date < date(:endTime)) " +
            "group by book.id " +
            "order by quantity desc " +
            "limit 10", nativeQuery = true)
    List<StatisticByYearDto> getStatisticByYear(@Param("startTime") String startTime, @Param("endTime") String endTime);

    @Query(value = "select sum(book.price * cart_detail.quantity) as `price`, " +
            "sum(cart_detail.quantity) as `quantity`, " +
            "week(cart.create_date) as `week`, " +
            "month(cart.create_date) as `month`, " +
            "year(cart.create_date) as `year`, " +
            "book.name as `time`, " +
            "customer.name as `customer`" +
            "from `book` " +
            "join cart_detail on cart_detail.book_id = book.id " +
            "join cart on cart.id = cart_detail.cart_id " +
            "join customer on customer.id = cart.customer_id " +
            "where (cart.create_date > date(:startTime)) " +
            "and (cart.create_date < date(:endTime)) " +
            "group by book.id " +
            "order by quantity desc " +
            "limit 10", nativeQuery = true)
    List<StatisticByWeekDto> getStatisticByWeekAndCustomer(@Param("startTime") String startTime, @Param("endTime") String endTime);

    @Query(value = "select sum(book.price * cart_detail.quantity) as `price`, " +
            "sum(cart_detail.quantity) as `quantity`, " +
            "month(cart.create_date) as `month`, " +
            "year(cart.create_date) as `year`, " +
            "book.name as `time`, " +
            "customer.name as `customer`" +
            "from `book` " +
            "join cart_detail on cart_detail.book_id = book.id " +
            "join cart on cart.id = cart_detail.cart_id " +
            "join customer on customer.id = cart.customer_id " +
            "where (cart.create_date > date(:startTime)) " +
            "and (cart.create_date < date(:endTime)) " +
            "group by book.id " +
            "order by quantity desc " +
            "limit 10", nativeQuery = true)
    List<StatisticByMonthDto> getStatisticByMonthAndCustomer(@Param("startTime") String startTime, @Param("endTime") String endTime);

    @Query(value = "select sum(book.price * cart_detail.quantity) as `price`, " +
            "sum(cart_detail.quantity) as `quantity`, " +
            "year(cart.create_date) as `year`, " +
            "book.name as `time`, " +
            "customer.name as `customer`" +
            "from `book` " +
            "join cart_detail on cart_detail.book_id = book.id " +
            "join cart on cart.id = cart_detail.cart_id " +
            "join customer on customer.id = cart.customer_id " +
            "where (cart.create_date > date(:startTime)) " +
            "and (cart.create_date < date(:endTime)) " +
            "group by book.id " +
            "order by quantity desc " +
            "limit 10", nativeQuery = true)
    List<StatisticByYearDto> getStatisticByYearAndCustomer(@Param("startTime") String startTime, @Param("endTime") String endTime);
}
