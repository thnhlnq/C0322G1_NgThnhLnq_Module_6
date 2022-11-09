package com.book.controller;

import com.book.dto.StatisticDto;
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

    @GetMapping("/{startTime}/{endTime}")
    public ResponseEntity<List<StatisticDto>> getStatistic(@PathVariable String startTime, @PathVariable String endTime) {
        List<StatisticDto> statisticDtos = statisticService.getStatistic(startTime, endTime);
        if (statisticDtos.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(statisticDtos, HttpStatus.OK);
    }

    @GetMapping("/customer")
    public ResponseEntity<List<StatisticDto>> getStatisticCustomer() {
        List<StatisticDto> statisticDtos = statisticService.getStatisticCustomer();
        if (statisticDtos.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(statisticDtos, HttpStatus.OK);
    }
}
