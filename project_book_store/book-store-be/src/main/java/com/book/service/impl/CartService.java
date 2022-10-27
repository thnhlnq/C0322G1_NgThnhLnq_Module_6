package com.book.service.impl;

import com.book.model.Cart;
import com.book.repository.ICartRepository;
import com.book.service.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService implements ICartService {

    @Autowired
    ICartRepository cartRepository;

    @Override
    public Cart save(Cart cart) {
        return cartRepository.save(cart);
    }

    @Override
    public List<Cart> findByCustomerId(Integer id) {
        return cartRepository.findByCustomerId(id);
    }
}
