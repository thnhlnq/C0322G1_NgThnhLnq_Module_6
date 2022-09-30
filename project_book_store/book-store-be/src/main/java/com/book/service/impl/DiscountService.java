package com.book.service.impl;

import com.book.model.Discount;
import com.book.repository.IDiscountRepository;
import com.book.service.IDiscountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiscountService implements IDiscountService{

    @Autowired
    IDiscountRepository discountRepository;

    @Override
    public List<Discount> findAll() {
        return discountRepository.findAll();
    }
}
