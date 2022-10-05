package com.book.service;

import com.book.model.Users;

import javax.mail.MessagingException;
import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.Optional;

public interface IUserService {

    Users findByName(String name);

    String existsByUserName(String username) throws MessagingException, UnsupportedEncodingException;

    void saveNewPassword(String password, String name);

    List<Users> findAll();

    void save(Users users);

    Optional<Users> findById(Integer id);

    void edit(Users users);

    void deleteUser(int id);

    Boolean existsUsername(String username);

    Boolean existsEmail(String email);
}
