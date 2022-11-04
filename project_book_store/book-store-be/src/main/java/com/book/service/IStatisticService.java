package com.book.service;

import com.book.dto.StatisticByMonthDto;
import com.book.dto.StatisticByWeekDto;
import com.book.dto.StatisticByYearDto;

import java.util.List;

public interface IStatisticService {

    List<StatisticByWeekDto> getStatisticByWeek(String startDate, String endDate);

    List<StatisticByMonthDto> getStatisticByMonth(String startDate, String endDate);

    List<StatisticByYearDto> getStatisticByYear(String startDate, String endDate);

    List<StatisticByWeekDto> getStatisticByWeekAndCustomer(String startDate, String endDate);

    List<StatisticByMonthDto> getStatisticByMonthAndCustomer(String startDate, String endDate);

    List<StatisticByYearDto> getStatisticByYearAndCustomer(String startDate, String endDate);
}
