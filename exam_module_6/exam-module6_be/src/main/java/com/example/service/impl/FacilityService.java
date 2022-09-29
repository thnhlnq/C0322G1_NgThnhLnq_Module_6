package com.example.service.impl;

import com.example.model.Facility;
import com.example.repository.IFacilityRepository;
import com.example.service.IFacilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FacilityService implements IFacilityService {

    @Autowired
    IFacilityRepository facilityRepository;

    @Override
    public Page<Facility> findAll(Pageable pageable, String name) {
        return facilityRepository.findAll(pageable, "%" + name + "%");
    }

    @Override
    public List<Facility> findAll() {
        return facilityRepository.findAll();
    }

    @Override
    public void save(Facility facility) {
        facilityRepository.save(facility);
    }

    @Override
    public Optional<Facility> findById(Integer id) {
        return facilityRepository.findById(id);
    }

    @Override
    public void delete(int id) {
        facilityRepository.delete(id);
    }

    @Override
    public Boolean existsName(String name) {
        return name.equals(facilityRepository.exists(name));
    }
}
