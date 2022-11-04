package com.book.controller;

import com.book.dto.StatisticByMonthDto;
import com.book.dto.StatisticByWeekDto;
import com.book.dto.StatisticByYearDto;
import com.book.service.IStatisticService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/public/statistic")
public class StatisticController {

    @Autowired
    IStatisticService statisticService;

    @GetMapping("/by-week/{startTime}/{endTime}")
    public ResponseEntity<List<StatisticByWeekDto>> getStatisticByWeek(@PathVariable String startTime, @PathVariable String endTime) {
        List<StatisticByWeekDto> statisticByWeekDtos = statisticService.getStatisticByWeek(startTime, endTime);
        if (statisticByWeekDtos.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(statisticByWeekDtos, HttpStatus.OK);
    }

    @GetMapping("/by-month/{startTime}/{endTime}")
    public ResponseEntity<List<StatisticByMonthDto>> getStatisticByMonth(@PathVariable String startTime, @PathVariable String endTime) {
        List<StatisticByMonthDto> statisticByMonthDtos = statisticService.getStatisticByMonth(startTime, endTime);
        if (statisticByMonthDtos.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(statisticByMonthDtos, HttpStatus.OK);
    }

    @GetMapping("/by-year/{startTime}/{endTime}")
    public ResponseEntity<List<StatisticByYearDto>> getStatisticByYear(@PathVariable String startTime, @PathVariable String endTime) {
        List<StatisticByYearDto> statisticByYearDtos = statisticService.getStatisticByYear(startTime, endTime);
        if (statisticByYearDtos.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(statisticByYearDtos, HttpStatus.OK);
    }

    @GetMapping("/by-week-customer/{startTime}/{endTime}")
    public ResponseEntity<List<StatisticByWeekDto>> getStatisticByWeekAndCustomer(@PathVariable String startTime, @PathVariable String endTime) {
        List<StatisticByWeekDto> statisticByWeekDtos = statisticService.getStatisticByWeekAndCustomer(startTime, endTime);
        if (statisticByWeekDtos.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(statisticByWeekDtos, HttpStatus.OK);
    }

    @GetMapping("/by-month-customer/{startTime}/{endTime}")
    public ResponseEntity<List<StatisticByMonthDto>> getStatisticByMonthAndCustomer(@PathVariable String startTime, @PathVariable String endTime) {
        List<StatisticByMonthDto> statisticByMonthDtos = statisticService.getStatisticByMonthAndCustomer(startTime, endTime);
        if (statisticByMonthDtos.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(statisticByMonthDtos, HttpStatus.OK);
    }

    @GetMapping("/by-year-customer/{startTime}/{endTime}")
    public ResponseEntity<List<StatisticByYearDto>> getStatisticByYearAndCustomer(@PathVariable String startTime, @PathVariable String endTime) {
        List<StatisticByYearDto> statisticByYearDtos = statisticService.getStatisticByYearAndCustomer(startTime, endTime);
        if (statisticByYearDtos.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(statisticByYearDtos, HttpStatus.OK);
    }
}
