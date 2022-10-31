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
    public List<StatisticByWeekDto> getStatisticByWeek(String startDate, String endDate, String type) {
        return statisticRepository.getStatisticByWeek(startDate, endDate, type);
    }

    @Override
    public List<StatisticByMonthDto> getStatisticByMonth(String startDate, String endDate, String type) {
        return statisticRepository.getStatisticByMonth(startDate, endDate, type);
    }

    @Override
    public List<StatisticByYearDto> getStatisticByYear(String startDate, String endDate, String type) {
        return statisticRepository.getStatisticByYear(startDate, endDate, type);
    }

    @Override
    public List<StatisticByWeekDto> getStatisticByWeekAndPublisher(String startDate, String endDate, String type, String publisher) {
        return statisticRepository.getStatisticByWeekAndPublisher(startDate, endDate, type, publisher);
    }

    @Override
    public List<StatisticByMonthDto> getStatisticByMonthAndPublisher(String startDate, String endDate, String type, String publisher) {
        return statisticRepository.getStatisticByMonthAndPublisher(startDate, endDate, type, publisher);
    }

    @Override
    public List<StatisticByYearDto> getStatisticByYearAndPublisher(String startDate, String endDate, String type, String publisher) {
        return statisticRepository.getStatisticByYearAndPublisher(startDate, endDate, type, publisher);
    }
}
