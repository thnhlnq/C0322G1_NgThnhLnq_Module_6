package com.example.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String code;

    private String name;

    private LocalDate birthday;

    private String gender;

    @ManyToOne
    @JoinColumn(name = "position_id", referencedColumnName = "id")
    private Position position;

    @JsonBackReference
    @OneToMany(mappedBy = "employee")
    private List<Facility> facilityEmp;

    public Employee() {
    }

    public Employee(Integer id, String code, String name, LocalDate birthday, String gender, Position position, List<Facility> facilityEmp) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
        this.position = position;
        this.facilityEmp = facilityEmp;
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

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

    public List<Facility> getFacilityEmp() {
        return facilityEmp;
    }

    public void setFacilityEmp(List<Facility> facilityEmp) {
        this.facilityEmp = facilityEmp;
    }
}
