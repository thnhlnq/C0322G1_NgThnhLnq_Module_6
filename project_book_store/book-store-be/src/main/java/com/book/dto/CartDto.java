package com.book.dto;

import java.util.List;

public class CartDto {

    private Integer id;
    private String createDate;
    private List<CartDetailDto> cartDetails;

    public CartDto() {
    }

    public CartDto(Integer id, String createDate) {
        this.id = id;
        this.createDate = createDate;
    }

    public CartDto(Integer id, String createDate, List<CartDetailDto> cartDetails) {
        this.id = id;
        this.createDate = createDate;
        this.cartDetails = cartDetails;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCreateDate() {
        return createDate;
    }

    public void setCreateDate(String createDate) {
        this.createDate = createDate;
    }

    public List<CartDetailDto> getCartDetails() {
        return cartDetails;
    }

    public void setCartDetails(List<CartDetailDto> cartDetails) {
        this.cartDetails = cartDetails;
    }
}
