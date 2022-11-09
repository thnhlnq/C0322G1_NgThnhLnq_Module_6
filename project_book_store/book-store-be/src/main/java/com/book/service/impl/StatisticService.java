package com.book.service.impl;

import com.book.dto.StatisticDto;
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
    public List<StatisticDto> getStatistic(String startDate, String endDate) {
        return statisticRepository.getStatistic(startDate, endDate);
    }

    @Override
    public List<StatisticDto> getStatisticCustomer() {
        return statisticRepository.getStatisticCustomer();
    }
}
