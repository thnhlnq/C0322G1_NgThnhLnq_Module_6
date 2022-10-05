package com.book.service;


import com.book.model.UserRole;

import java.util.List;

public interface IUserRoleService {

    List<UserRole> findAll();

    void save(UserRole userRole);

    void deleteUserRole(int id);

}
