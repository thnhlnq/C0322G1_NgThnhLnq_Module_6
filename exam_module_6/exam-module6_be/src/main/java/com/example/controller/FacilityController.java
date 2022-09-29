package com.example.controller;

import com.example.model.Employee;
import com.example.model.Facility;
import com.example.service.ICustomerService;
import com.example.service.IEmployeeService;
import com.example.service.IFacilityService;
import com.example.service.IPositionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/")
public class FacilityController {

    @Autowired
    IFacilityService facilityService;

    @Autowired
    IPositionService positionService;

    @Autowired
    IEmployeeService employeeService;

    @Autowired
    ICustomerService customerService;

    @GetMapping("")
    public ResponseEntity<Page<Facility>> findAll(@PageableDefault(value = 5) Pageable pageable,
                                                  @RequestParam Optional<String> search) {
        String name = search.orElse("");
        Page<Facility> page = facilityService.findAll(pageable, name);
        if (page.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(page, HttpStatus.OK);
    }

    @GetMapping("/facility")
    public ResponseEntity<List<Facility>> getAll() {
        List<Facility> facilities = facilityService.findAll();
        if (facilities.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(facilities, HttpStatus.OK);
    }

    @GetMapping("/employee")
    public ResponseEntity<List<Employee>> getAllEmployee() {
        List<Employee> employees = employeeService.findAll();
        if (employees.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    @PostMapping("/facility/create")
    public ResponseEntity create(@RequestBody Facility facility) {
        facilityService.save(facility);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/facility/{id}")
    public ResponseEntity<Facility> delete(@PathVariable("id") int id) {
        facilityService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/facility/checkName/{name}")
    public ResponseEntity<?> check(@PathVariable("name") String name) {
        return new ResponseEntity<>(facilityService.existsName(name), HttpStatus.OK);
    }
}
