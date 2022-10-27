package com.book.service;

import com.book.model.Cart;

import java.util.List;

public interface ICartService {

    Cart save(Cart cart);

    List<Cart> findByCustomerId(Integer id);
}
