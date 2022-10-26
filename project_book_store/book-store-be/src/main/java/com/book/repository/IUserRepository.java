package com.book.repository;

import com.book.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface IUserRepository extends JpaRepository<Users, Integer> {

    @Query(value = "select * from users a where a.username = :name and `status` = 0", nativeQuery = true)
    Users findUsersByName(@Param("name") String name);

    @Query(value = "select username from users where username = ?1 and `status` = 0", nativeQuery = true)
    String existsByUserName(String username);

    @Modifying
    @Query(value = "update users set password =?1 where username = ?2", nativeQuery = true)
    void saveNewPassword(String password, String name);

    @Query(value = "select username from users where username = :username", nativeQuery = true)
    String existsUsername(@Param("username") String username);

    @Query(value = "select email from users where email = :email", nativeQuery = true)
    String existsEmail(@Param("email") String email);

    @Modifying
    @Query(value = "insert into users (email, username, password, status) values (:email, :username, :password, 0)", nativeQuery = true)
    void save(@Param("email") String email, @Param("username") String username, @Param("password") String password);
}
