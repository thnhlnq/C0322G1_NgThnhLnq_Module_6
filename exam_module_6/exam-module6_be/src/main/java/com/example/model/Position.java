package com.example.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.List;

@Entity
public class Position {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String manager;

    private String PT;

    @JsonBackReference
    @OneToMany(mappedBy = "position")
    private List<Employee> employee;

    public Position() {
    }

    public Position(Integer id, String manager, String PT, List<Employee> employee) {
        this.id = id;
        this.manager = manager;
        this.PT = PT;
        this.employee = employee;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getManager() {
        return manager;
    }

    public void setManager(String manager) {
        this.manager = manager;
    }

    public String getPT() {
        return PT;
    }

    public void setPT(String PT) {
        this.PT = PT;
    }

    public List<Employee> getEmployee() {
        return employee;
    }

    public void setEmployee(List<Employee> employee) {
        this.employee = employee;
    }
}
