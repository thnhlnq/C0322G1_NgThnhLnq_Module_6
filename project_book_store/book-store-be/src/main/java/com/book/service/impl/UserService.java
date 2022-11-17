package com.book.service.impl;

import com.book.dto.CartDetailDto;
import com.book.model.Cart;
import com.book.model.CartDetail;
import com.book.model.Users;
import com.book.repository.ICartDetailRepository;
import com.book.repository.IUserRepository;
import com.book.repository.IUserRoleRepository;
import com.book.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
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
    IUserRoleRepository userRoleRepository;

    @Autowired
    ICartDetailRepository cartDetailRepository;

    @Autowired
    private JavaMailSender javaMailSender;

    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

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
        mailContent = "<p sytle='color:red;'>Xin chào " + userName + " ,<p>" + "<p> Nhấn vào link sau để xác thực email của bạn:</p>" + "<h3><a href='" + confirmUrl + "'>Link Xác thực( nhấn vào đây)!</a></h3>" + "<p>CODE GYM</p>";
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
    public void create(Users users) {
        if (userRepository.findUsersByName(users.getUsername()) != null) {
            return;
        }
        users.setPassword(passwordEncoder().encode(users.getPassword()));
        userRepository.save(users);
        userRoleRepository.save(users.getId());
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

    @Override
    public void emailAfterPaypal(Cart cart, List<CartDetailDto> list) throws MessagingException, UnsupportedEncodingException {
        String subject = "Thông Tin Thanh Toán";
        String mailContent = "";
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, "UTF-8");
        helper.setFrom("ntlonq14@gmail.com", "Book Store");
        helper.setTo(cart.getCustomer().getUsers().getEmail());
        helper.setSubject(subject);

        mailContent +=
                "<!DOCTYPE html>\n" +
                        "<html>\n" +
                        "<head>\n" +
                        "<style>\n" +
                        "table {\n" +
                        "  border-collapse: collapse;\n" +
                        "  width: 100%;\n" +
                        "}\n" +
                        "\n" +
                        "th, td {\n" +
                        "  padding: 8px;\n" +
                        "  text-align: left;\n" +
                        "  border-bottom: 1px solid #DDD;\n" +
                        "}\n" +
                        "\n" +
                        "tr:hover {background-color: #D6EEEE;}\n" +
                        "</style>\n" +
                        "</head>\n" +
                        "<body>\n" +
                        "\n" +
                        "<h2 style=\"text-align: center\">Cảm ơn bạn đã đặt hàng tại Book Store</h2>\n" +
                        "<h2>Xin chào " + cart.getCustomer().getName() + "</h2>\n" +
                        "<p>BookStore đã nhận được yêu cầu đặt hàng của bạn và đang xử lý nhé. Bạn sẽ nhận được thông báo tiếp theo khi đơn hàng đã sẵn sàng được giao.</p>\n" +
                        "<h2 style=\"text-align: center\">Tình Trạng Đơn Hàng: </h2>\n" +
                        "<p><strong>*Lưu ý nhỏ cho bạn:</strong> Bạn chỉ nên nhận hàng khi trạng thái đơn hàng là <strong>'Đang giao hàng'</strong> và nhớ kiểm tra Mã đơn hàng, Thông tin người gửi và Mã vận đơn để nhận đúng kiện hàng nhé.</p>\n" +
                        "<h3>Đơn Hàng Được Giao Đến: </h3>\n" +
                        "<p>Tên: " + cart.getCustomer().getName() + "</p>\n" +
                        "<p>Địa Chỉ: " + cart.getCustomer().getAddress() + "</p>\n" +
                        "<p>Điện Thoại: " + cart.getCustomer().getPhone() + "</p>\n" +
                        "<p>Email: " + cart.getCustomer().getUsers().getEmail() + "</p>\n" +
                        "<h3>Chi Tiết Kiện Hàng</h3>\n" +
                        "\n" +
                        "<table>\n" +
                        "  <tr style='background-color: grey'>\n" +
                        "    <th>STT</th>\n" +
                        "    <th>Tên Sách</th>\n" +
                        "    <th>Số Lượng</th>\n" +
                        "    <th>Giá</th>\n" +
                        "  </tr>\n";
        int sum = 0;
        int index = 1;
        for (CartDetail cartDetail : cartDetailRepository.findCartDetail(cart.getId())) {
            mailContent +=
                    "  <tr>\n" +
                            "    <td>" + index + "</td>\n" +
                            "    <td>" + cartDetail.getBook().getName() + "</td>\n" +
                            "    <td>" + cartDetail.getQuantity() + "</td>\n" +
                            "    <td>" + cartDetail.getBook().getPrice() + " ₫</td>\n" +
                            "  </tr>\n";
            sum += cartDetail.getBook().getPrice() * cartDetail.getQuantity();
            index++;
        }
        mailContent +=
                "<tr>" +
                        "<td colspan='3' style='text-align: right'>Tổng Tiền: </td>" +
                        "<td colspan='2' style=\"color: #dc3545; font-weight: bold\">" + sum + " ₫</td>" +
                        "</tr>" +
                        "</table>" +
                        "\n" +
                        "</body>\n" +
                        "</html>";
        helper.setText(mailContent, true);
        javaMailSender.send(message);
    }
}
