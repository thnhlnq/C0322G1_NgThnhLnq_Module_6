package com.book.service.impl;

import com.book.model.Roles;
import com.book.repository.IRoleRepository;
import com.book.service.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleService implements IRoleService {

    @Autowired
    IRoleRepository roleRepository;

    @Override
    public void save(Roles roles) {
        roleRepository.save(roles);
    }
}
