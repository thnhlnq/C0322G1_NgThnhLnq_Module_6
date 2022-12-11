package com.book.service.impl;

import com.book.dto.CartDetailDto;
import com.book.model.Cart;
import com.book.model.CartDetail;
import com.book.repository.ICartDetailRepository;
import freemarker.template.Configuration;
import freemarker.template.TemplateException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.IOException;
import java.io.StringWriter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class EmailService {

    final Configuration configuration;
    final JavaMailSender javaMailSender;

    @Autowired
    ICartDetailRepository cartDetailRepository;

    public EmailService(Configuration configuration, JavaMailSender javaMailSender) {
        this.configuration = configuration;
        this.javaMailSender = javaMailSender;
    }

    public void sendEmail(Cart cart, List<CartDetailDto> list) throws MessagingException, IOException, TemplateException {
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, "UTF-8");
        helper.setSubject("Thông Tin Thanh Toán");
        helper.setFrom("ntlonq14@gmail.com", "Book Store");
        helper.setTo(cart.getCustomer().getUsers().getEmail());
        int sum = 0;
        for (CartDetail cartDetail : cartDetailRepository.findCartDetail(cart.getId())) {
            sum += cartDetail.getBook().getPrice() * cartDetail.getQuantity();
        }
        StringWriter stringWriter = new StringWriter();
        Map<String, Object> model = new HashMap<>();
        model.put("cart", cart);
        model.put("sum", sum);
        model.put("CartDetail", cartDetailRepository.findCartDetail(cart.getId()));
        configuration.getTemplate("email.ftlh").process(model, stringWriter);
        helper.setText(stringWriter.getBuffer().toString(), true);
        javaMailSender.send(message);
    }
}
