package com.book.service;

import com.book.dto.StatisticDto;

import java.util.List;

public interface IStatisticService {

    List<StatisticDto> getStatistic(String startDate, String endDate);

    List<StatisticDto> getStatisticCustomer();
}
