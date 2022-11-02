package com.book.service.impl;

import com.book.model.Users;
import com.book.repository.IUserRepository;
import com.book.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.Optional;

@Service
public class UserService implements IUserService {

    @Autowired
    IUserRepository userRepository;

    @Autowired
    private JavaMailSender javaMailSender;

    @Override
    public Users findByName(String name) {
        return userRepository.findUsersByName(name);
    }

    @Override
    public String existsByUserName(String username) throws MessagingException, UnsupportedEncodingException {
        String user = userRepository.existsByUserName(username);
        Users users = userRepository.findUsersByName(username);
        if (user != null) {
            sendVerificationEmailForResetPassWord(username, users.getEmail());
        }
        return user;
    }

    @Override
    public void saveNewPassword(String password, String name) {
        userRepository.saveNewPassword(password, name);
    }

    public void sendVerificationEmailForResetPassWord(String userName, String email) throws MessagingException, UnsupportedEncodingException {
        String subject = "Hãy xác thực email của bạn";
        String mailContent = "";
        String confirmUrl = "http://localhost:4200/verify-reset-password/" + userName;


        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, "UTF-8");
        helper.setFrom("ntlonq14@gmail.com", "CODEGYM");
        helper.setTo(email);
        helper.setSubject(subject);
        mailContent = "<p sytle='color:red;'>Xin chào " + userName + " ,<p>" + "<p> Nhấn vào link sau để xác thực email của bạn:</p>" +
                "<h3><a href='" + confirmUrl + "'>Link Xác thực( nhấn vào đây)!</a></h3>" +
                "<p>CODE GYM</p>";
        helper.setText(mailContent, true);
        javaMailSender.send(message);
    }

    @Override
    public List<Users> findAll() {
        return userRepository.findAll();
    }

    @Override
    public void save(Users users) {
        userRepository.save(users.getEmail(), users.getUsername(), users.getPassword());
    }

    @Override
    public Optional<Users> findById(Integer id) {
        return userRepository.findById(id);
    }

    @Override
    public void edit(Users users) {
        userRepository.save(users);
    }

    @Override
    public void deleteUser(int id) {
        userRepository.deleteById(id);
    }

    @Override
    public Boolean existsUsername(String username) {
        return username.equals(userRepository.existsUsername(username));
    }

    @Override
    public Boolean existsEmail(String email) {
        return email.equals(userRepository.existsEmail(email));
    }
}
