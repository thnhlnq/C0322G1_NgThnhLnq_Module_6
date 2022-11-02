package com.book.service.impl;

import com.book.model.UserRole;
import com.book.repository.IUserRepository;
import com.book.repository.IUserRoleRepository;
import com.book.service.IUserRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserRoleService implements IUserRoleService {

    @Autowired
    IUserRoleRepository userRoleRepository;

    @Autowired
    IUserRepository userRepository;

    @Override
    public List<UserRole> findAll() {
        return userRoleRepository.findAll();
    }

    @Override
    public void save(UserRole userRole) {
        userRoleRepository.save(userRole.getRoles().getId(), userRole.getUsers().getId());
    }

    @Override
    public void deleteUserRole(int id) {
        userRoleRepository.deleteById(id);
    }
}
