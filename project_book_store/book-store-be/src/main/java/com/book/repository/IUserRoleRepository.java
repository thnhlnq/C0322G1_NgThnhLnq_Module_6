package com.book.repository;

import com.book.model.UserRole;
import com.book.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public interface IUserRoleRepository extends JpaRepository<UserRole, Integer> {

    List<UserRole> findAllByUsers(Users users);

    @Modifying
    @Query(value = "insert into user_role (`status`, `roles_id`,`users_id`) values (0, :roleId, :userId)", nativeQuery = true)
    void save(@Param("roleId") Integer roleId, @Param("userId") Integer userId);

}
