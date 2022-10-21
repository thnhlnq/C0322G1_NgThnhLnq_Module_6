package com.book.service;

import com.book.model.Customer;

public interface ICustomerService {

    Customer findByUsername(String username);
}
