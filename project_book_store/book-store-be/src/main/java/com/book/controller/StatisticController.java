package com.book.controller;

import com.book.dto.StatisticByMonthDto;
import com.book.dto.StatisticByWeekDto;
import com.book.dto.StatisticByYearDto;
import com.book.service.IStatisticService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/public/statistic")
public class StatisticController {

    @Autowired
    IStatisticService statisticService;

    @GetMapping("by-week/{startTime}/{endTime}/{type}")
    public ResponseEntity<List<StatisticByWeekDto>> getStatisticByWeek(@PathVariable String startTime,
                                                                       @PathVariable String endTime,
                                                                       @PathVariable String type) {
        if (type.equals("all")) {
            type = "";
        }
        try {
            if (LocalDate.parse(startTime).plusDays(1).isAfter(LocalDate.parse(endTime)) || !type.equals("0") && !type.equals("1") && !type.equals("")) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        List<StatisticByWeekDto> statisticByWeekDtos = statisticService.getStatisticByWeek(startTime, endTime, type);
        if (statisticByWeekDtos.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(statisticByWeekDtos, HttpStatus.OK);
    }

    @GetMapping("by-month/{startTime}/{endTime}/{type}")
    public ResponseEntity<List<StatisticByMonthDto>> getStatisticByMonth(@PathVariable String startTime,
                                                                         @PathVariable String endTime,
                                                                         @PathVariable String type) {
        if (type.equals("all")) {
            type = "";
        }
        try {
            if (LocalDate.parse(startTime).plusDays(1).isAfter(LocalDate.parse(endTime)) || !type.equals("0") && !type.equals("1") && !type.equals("")) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        List<StatisticByMonthDto> statisticByMonthDtos = statisticService.getStatisticByMonth(startTime, endTime, type);
        if (statisticByMonthDtos.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(statisticByMonthDtos, HttpStatus.OK);
    }

    @GetMapping("by-year/{startTime}/{endTime}/{type}")
    public ResponseEntity<List<StatisticByYearDto>> getStatisticByYear(@PathVariable String startTime,
                                                                       @PathVariable String endTime,
                                                                       @PathVariable String type) {
        if (type.equals("all")) {
            type = "";
        }
        try {
            if (LocalDate.parse(startTime).plusDays(1).isAfter(LocalDate.parse(endTime)) || !type.equals("0") && !type.equals("1") && !type.equals("")) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        List<StatisticByYearDto> statisticByYearDtos = statisticService.getStatisticByYear(startTime, endTime, type);
        if (statisticByYearDtos.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(statisticByYearDtos, HttpStatus.OK);
    }

    @GetMapping("by-week-publisher/{startTime}/{endTime}/{type}/{publisher}")
    public ResponseEntity<List<StatisticByWeekDto>> getStatisticByWeekAndPublisher(@PathVariable String startTime,
                                                                                   @PathVariable String endTime,
                                                                                   @PathVariable String type,
                                                                                   @PathVariable String publisher) {
        if (type.equals("all")) {
            type = "";
        }
        try {
            if (LocalDate.parse(startTime).plusDays(1).isAfter(LocalDate.parse(endTime)) || publisher == null || publisher.equals("") || !type.equals("0") && !type.equals("1") && !type.equals("")) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        List<StatisticByWeekDto> statisticByWeekDtos = statisticService.getStatisticByWeekAndPublisher(startTime, endTime, type, publisher);
        if (statisticByWeekDtos.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(statisticByWeekDtos, HttpStatus.OK);
    }

    @GetMapping("by-month-publisher/{startTime}/{endTime}/{type}/{publisher}")
    public ResponseEntity<List<StatisticByMonthDto>> getStatisticByMonthAndPublisher(@PathVariable String startTime,
                                                                                     @PathVariable String endTime,
                                                                                     @PathVariable String type,
                                                                                     @PathVariable String publisher) {
        if (type.equals("all")) {
            type = "";
        }
        try {
            if (LocalDate.parse(startTime).plusDays(1).isAfter(LocalDate.parse(endTime)) || publisher == null || publisher.equals("") || !type.equals("0") && !type.equals("1") && !type.equals("")) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        List<StatisticByMonthDto> statisticByMonthDtos = statisticService.getStatisticByMonthAndPublisher(startTime, endTime, type, publisher);
        if (statisticByMonthDtos.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(statisticByMonthDtos, HttpStatus.OK);
    }

    @GetMapping("by-year-publisher/{startTime}/{endTime}/{type}/{publisher}")
    public ResponseEntity<List<StatisticByYearDto>> getStatisticByYearAndPublisher(@PathVariable String startTime,
                                                                                   @PathVariable String endTime,
                                                                                   @PathVariable String type,
                                                                                   @PathVariable String publisher) {
        if (type.equals("all")) {
            type = "";
        }
        try {
            if (LocalDate.parse(startTime).plusDays(1).isAfter(LocalDate.parse(endTime)) || publisher == null || publisher.equals("") || !type.equals("0") && !type.equals("1") && !type.equals("")) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        List<StatisticByYearDto> statisticByYearDtos = statisticService.getStatisticByYearAndPublisher(startTime, endTime, type, publisher);
        if (statisticByYearDtos.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(statisticByYearDtos, HttpStatus.OK);
    }
}
