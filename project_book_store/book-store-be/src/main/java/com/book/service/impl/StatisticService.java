package com.book.service.impl;

import com.book.dto.StatisticByMonthDto;
import com.book.dto.StatisticByWeekDto;
import com.book.dto.StatisticByYearDto;
import com.book.repository.IStatisticRepository;
import com.book.service.IStatisticService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StatisticService implements IStatisticService {

    @Autowired
    IStatisticRepository statisticRepository;

    @Override
    public List<StatisticByWeekDto> getStatisticByWeek(String startDate, String endDate) {
        return statisticRepository.getStatisticByWeek(startDate, endDate);
    }

    @Override
    public List<StatisticByMonthDto> getStatisticByMonth(String startDate, String endDate) {
        return statisticRepository.getStatisticByMonth(startDate, endDate);
    }

    @Override
    public List<StatisticByYearDto> getStatisticByYear(String startDate, String endDate) {
        return statisticRepository.getStatisticByYear(startDate, endDate);
    }

    @Override
    public List<StatisticByWeekDto> getStatisticByWeekAndCustomer(String startDate, String endDate) {
        return statisticRepository.getStatisticByWeekAndCustomer(startDate, endDate);
    }

    @Override
    public List<StatisticByMonthDto> getStatisticByMonthAndCustomer(String startDate, String endDate) {
        return statisticRepository.getStatisticByMonthAndCustomer(startDate, endDate);
    }

    @Override
    public List<StatisticByYearDto> getStatisticByYearAndCustomer(String startDate, String endDate) {
        return statisticRepository.getStatisticByYearAndCustomer(startDate, endDate);
    }
}
