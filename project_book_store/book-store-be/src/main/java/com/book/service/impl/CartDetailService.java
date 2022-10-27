package com.book.service.impl;

import com.book.model.CartDetail;
import com.book.repository.ICartDetailRepository;
import com.book.service.ICartDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartDetailService implements ICartDetailService {

    @Autowired
    ICartDetailRepository cartDetailRepository;

    @Override
    public CartDetail save(CartDetail cartDetail) {
        return cartDetailRepository.save(cartDetail);
    }

    @Override
    public List<CartDetail> findCartDetail(Integer id) {
        return cartDetailRepository.findCartDetail(id);
    }
}
