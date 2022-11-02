package com.book.service.impl;

import com.book.model.Customer;
import com.book.model.Roles;
import com.book.model.UserRole;
import com.book.model.Users;
import com.book.repository.ICustomerRepository;
import com.book.repository.IUserRepository;
import com.book.repository.IUserRoleRepository;
import com.book.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService implements ICustomerService {

    @Autowired
    ICustomerRepository customerRepository;

    @Autowired
    IUserRepository userRepository;

    @Autowired
    IUserRoleRepository userRoleRepository;

    @Override
    public List<Customer> findAll() {
        return customerRepository.findAll();
    }

    @Override
    public Customer findByUsername(String username) {
        return customerRepository.findByUsername(username);
    }

    @Override
    public void save(Customer customer) {
        List<Users> users = userRepository.findAll();
        UserRole userRole = new UserRole();
        Roles roles = new Roles();
        roles.setId(2);
        userRole.setStatus(false);
        userRole.setUsers(users.get(users.toArray().length - 1));
        userRole.setRoles(roles);
        userRoleRepository.save(userRole);

        customer.setUsers(customer.getUsers());
        customerRepository.save(customer.getName(), customer.getAddress(), customer.getBirthday(), customer.getGender(), customer.getPhone(), users.toArray().length);
    }

    @Override
    public Customer findHistoryByUsername(String username) {
        return customerRepository.findHistoryByUsername(username);
    }
}
