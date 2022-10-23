package com.book.controller;

import com.book.dto.CustomerDto;
import com.book.dto.UserDto;
import com.book.model.Customer;
import com.book.model.Users;
import com.book.service.ICustomerService;
import com.book.service.IUserService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/public/customer")
public class CustomerController {

    @Autowired
    ICustomerService customerService;

    @Autowired
    IUserService userService;

    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @GetMapping("")
    public ResponseEntity<List<Customer>> getAll() {
        List<Customer> customers = customerService.findAll();
        if (customers.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(customers, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Object> create(@RequestBody @Valid CustomerDto customerDto) {

        UserDto userDto = customerDto.getUserDto();

        Users users = new Users();

        BeanUtils.copyProperties(userDto, users);

        users.setPassword(passwordEncoder().encode(users.getPassword()));

        userService.save(users);

        Customer customer = new Customer();

        BeanUtils.copyProperties(customerDto, customer);

        customerService.save(customer);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
