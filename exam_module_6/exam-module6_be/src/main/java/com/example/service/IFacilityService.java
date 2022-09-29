package com.example.service;

import com.example.model.Facility;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface IFacilityService {

    List<Facility> findAll();

    Page<Facility> findAll(Pageable pageable, String name);

    void save(Facility facility);

    Optional<Facility> findById(Integer id);

    void delete(int id);

    Boolean existsName(String name);
}
