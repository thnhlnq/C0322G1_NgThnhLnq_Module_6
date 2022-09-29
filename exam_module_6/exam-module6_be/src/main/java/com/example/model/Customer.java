package com.example.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String code;

    private String name;

    private String idCard;

    private LocalDate birthday;

    private String gender;

    private LocalDate registerDate;

    private LocalDate endDate;

    @ManyToOne
    @JoinColumn(name = "facility_id", referencedColumnName = "id")
    private Facility facility;

    public Customer() {
    }

    public Customer(Integer id, String code, String name, String idCard, LocalDate birthday, String gender, LocalDate registerDate, LocalDate endDate, Facility facility) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.idCard = idCard;
        this.birthday = birthday;
        this.gender = gender;
        this.registerDate = registerDate;
        this.endDate = endDate;
        this.facility = facility;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIdCard() {
        return idCard;
    }

    public void setIdCard(String idCard) {
        this.idCard = idCard;
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

    public LocalDate getRegisterDate() {
        return registerDate;
    }

    public void setRegisterDate(LocalDate registerDate) {
        this.registerDate = registerDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public Facility getFacility() {
        return facility;
    }

    public void setFacility(Facility facility) {
        this.facility = facility;
    }
}
