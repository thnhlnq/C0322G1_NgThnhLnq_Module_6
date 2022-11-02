package com.book.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

public class CustomerDto {

    private Integer id;

    @NotBlank(message = "Vui Lòng Không Để Trống.")
    private String name;

    @NotBlank(message = "Vui Lòng Không Để Trống.")
    private String address;

    @NotNull(message = "Vui Lòng Không Để Trống.")
    private LocalDate birthday;

    @NotBlank(message = "Vui Lòng Không Để Trống.")
    private String gender;

    @NotBlank(message = "Vui Lòng Không Để Trống.")
    private String phone;

    private boolean status;

    private UserDto users;

    public CustomerDto() {
    }

    public CustomerDto(Integer id, String name, String address, LocalDate birthday, String gender, String phone, boolean status, UserDto users) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.birthday = birthday;
        this.gender = gender;
        this.phone = phone;
        this.status = status;
        this.users = users;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public LocalDate getBirthday() {
        return birthday;
    }

    public void setBirthday(LocalDate birthday) {
        this.birthday = birthday;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public UserDto getUsers() {
        return users;
    }

    public void setUsers(UserDto users) {
        this.users = users;
    }
}
