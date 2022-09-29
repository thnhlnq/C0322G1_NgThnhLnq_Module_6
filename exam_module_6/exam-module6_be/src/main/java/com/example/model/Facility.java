package com.example.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
public class Facility {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String code;

    private String name;

    private LocalDate openDay;

    private String address;

    private Boolean isDeleted;

    @ManyToOne
    @JoinColumn(name = "employee_id", referencedColumnName = "id")
    private Employee employee;

    @JsonBackReference
    @OneToMany(mappedBy = "facility")
    private List<Customer> customers;

    public Facility() {
    }

    public Facility(Integer id, String code, String name, LocalDate openDay, String address, Boolean isDeleted, Employee employee, List<Customer> customers) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.openDay = openDay;
        this.address = address;
        this.isDeleted = isDeleted;
        this.employee = employee;
        this.customers = customers;
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

    public LocalDate getOpenDay() {
        return openDay;
    }

    public void setOpenDay(LocalDate openDay) {
        this.openDay = openDay;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Boolean getDeleted() {
        return isDeleted;
    }

    public void setDeleted(Boolean deleted) {
        isDeleted = deleted;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public List<Customer> getCustomers() {
        return customers;
    }

    public void setCustomers(List<Customer> customers) {
        this.customers = customers;
    }
}
