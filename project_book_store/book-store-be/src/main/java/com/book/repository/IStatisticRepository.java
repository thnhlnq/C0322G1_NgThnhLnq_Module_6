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

    @Query(value = "select sum(price * quantity) as price, " +
            "publisher as publisher, " +
            "sum(quantity) as quantity, " +
            "week(release_date) as `week`, " +
            "month(release_date) as `month`, " +
            "year(release_date) as `year`, " +
            "concat(week(release_date), '/', month(release_date), '/ ', year(release_date), ' - ' , publisher) as `time` " +
            "from `book` " +
            "where (release_date > date(:startTime)) " +
            "and(release_date < date(:endTime)) " +
            "and `name` like %:type% group by `time` order by `time`;", nativeQuery = true)
    List<StatisticByWeekDto> getStatisticByWeek(@Param("startTime") String startTime, @Param("endTime") String endTime, @Param("type") String type);

    @Query(value = "select sum(price * quantity) as price, " +
            "publisher as publisher, " +
            "sum(quantity) as quantity, " +
            "month(release_date) as `month`, " +
            "year(release_date) as `year`, " +
            "concat(month(release_date), ' / ', year(release_date), ' - ' , publisher) as `time` " +
            "from `book` " +
            "where (release_date > date(:startTime)) " +
            "and(release_date < date(:endTime)) " +
            "and `name` like %:type% group by `time` order by `time`;", nativeQuery = true)
    List<StatisticByMonthDto> getStatisticByMonth(@Param("startTime") String startTime, @Param("endTime") String endTime, @Param("type") String type);

    @Query(value = "select sum(price * quantity) as price, " +
            "publisher as publisher, " +
            "sum(quantity) as quantity, " +
            "month(release_date) as `month`, " +
            "year(release_date) as `year`, " +
            "concat(year(release_date), ' - ' , publisher) as `time` " +
            "from `book` " +
            "where (release_date > date(:startTime)) " +
            "and(release_date < date(:endTime)) " +
            "and `name` like %:type% group by `time` order by `time`;", nativeQuery = true)
    List<StatisticByYearDto> getStatisticByYear(@Param("startTime") String startTime, @Param("endTime") String endTime, @Param("type") String type);

    @Query(value = "SELECT SUM(price * quantity) AS price, " +
            "publisher AS publisher, " +
            "SUM(quantity) AS quantity, " +
            "WEEK(release_date) AS `week`, " +
            "MONTH(release_date) AS `month`, " +
            "YEAR(release_date) AS `year`, " +
            "CONCAT(MONTH(release_date), ' / ' ,YEAR(release_date), ' - ', publisher) AS `time`FROM `book` " +
            "WHERE (release_date > DATE(:startTime)) and publisher = :publisher AND (release_date < DATE(:endTime))AND `name` LIKE %:type% GROUP BY `time` ORDER BY `time`;", nativeQuery = true)
    List<StatisticByWeekDto> getStatisticByWeekAndPublisher(@Param("startTime") String startTime, @Param("endTime") String endTime, @Param("type") String type, @Param("publisher") String publisher);


    @Query(value = "SELECT SUM(price * quantity) AS price, " +
            "publisher AS publisher, " +
            "SUM(quantity) AS quantity, " +
            "MONTH(release_date) AS `month`, " +
            "YEAR(release_date) AS `year`, " +
            "CONCAT(MONTH(release_date), ' / ' ,YEAR(release_date), ' - ', publisher) AS `time`FROM `book` " +
            "WHERE (release_date > DATE(:startTime)) and publisher = :publisher AND (release_date < DATE(:endTime))AND `name` LIKE %:type% GROUP BY `time` ORDER BY `time`;", nativeQuery = true)
    List<StatisticByMonthDto> getStatisticByMonthAndPublisher(@Param("startTime") String startTime, @Param("endTime") String endTime, @Param("type") String type, @Param("publisher") String publisher);

    @Query(value = "SELECT SUM(price * quantity) AS price, " +
            "publisher AS publisher, " +
            "SUM(quantity) AS quantity, " +
            "YEAR(release_date) AS `year`, " +
            "CONCAT(YEAR(release_date), ' - ', publisher) AS `time`FROM `book` " +
            "WHERE (release_date > DATE(:startTime)) and publisher = :publisher AND (release_date < DATE(:endTime))AND `name` LIKE %:type% GROUP BY `time` ORDER BY `time`;", nativeQuery = true)
    List<StatisticByYearDto> getStatisticByYearAndPublisher(@Param("startTime") String startTime, @Param("endTime") String endTime, @Param("type") String type, @Param("publisher") String publisher);
}
