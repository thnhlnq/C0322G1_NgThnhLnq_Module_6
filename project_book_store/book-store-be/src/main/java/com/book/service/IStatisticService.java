package com.book.service;

import com.book.dto.StatisticByMonthDto;
import com.book.dto.StatisticByWeekDto;
import com.book.dto.StatisticByYearDto;

import java.util.List;

public interface IStatisticService {

    List<StatisticByWeekDto> getStatisticByWeek(String startDate, String endDate, String type);

    List<StatisticByMonthDto> getStatisticByMonth(String startDate, String endDate, String type);

    List<StatisticByYearDto> getStatisticByYear(String startDate, String endDate, String type);

    List<StatisticByWeekDto> getStatisticByWeekAndPublisher(String startDate, String endDate, String type, String publisher);

    List<StatisticByMonthDto> getStatisticByMonthAndPublisher(String startDate, String endDate, String type, String publisher);

    List<StatisticByYearDto> getStatisticByYearAndPublisher(String startDate, String endDate, String type, String publisher);
}
