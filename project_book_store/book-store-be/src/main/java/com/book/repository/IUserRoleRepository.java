package com.book.repository;

import com.book.model.UserRole;
import com.book.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IUserRoleRepository extends JpaRepository<UserRole, Integer> {
    List<UserRole> findAllByUsers(Users users);
}
