package com.book.service;

import com.book.model.Customer;

import java.util.List;

public interface ICustomerService {

    List<Customer> findAll();

    Customer findByUsername(String username);

    void save(Customer customer);

    Customer findHistoryByUsername(String username);
}
