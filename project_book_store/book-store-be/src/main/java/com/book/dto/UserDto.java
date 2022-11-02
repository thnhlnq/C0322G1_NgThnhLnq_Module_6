package com.book.dto;

import com.book.model.UserRole;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.List;

public class UserDto {

    private Integer id;

    @NotBlank(message = "Vui Lòng Không Để Trống.")
    @Email(message = "Email Không Đúng Định Dạng.")
    private String email;

    @NotBlank(message = "Vui Lòng Không Để Trống.")
    private String username;

    @NotBlank(message = "Vui Lòng Không Để Trống.")
    private String password;

    private boolean status;

    private CustomerDto customerDto;

    private List<UserRole> userRoles;

    public UserDto() {
    }

    public UserDto(Integer id, String email, String username, String password, boolean status, CustomerDto customerDto, List<UserRole> userRoles) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.password = password;
        this.status = status;
        this.customerDto = customerDto;
        this.userRoles = userRoles;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public CustomerDto getCustomerDto() {
        return customerDto;
    }

    public void setCustomerDto(CustomerDto customerDto) {
        this.customerDto = customerDto;
    }

    public List<UserRole> getUserRoles() {
        return userRoles;
    }

    public void setUserRoles(List<UserRole> userRoles) {
        this.userRoles = userRoles;
    }
}
