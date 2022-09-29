package com.example.repository;

import com.example.model.Facility;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public interface IFacilityRepository extends JpaRepository<Facility, Integer> {

    @Query(value = "select * from facility where is_deleted = 0", nativeQuery = true)
    List<Facility> findAll();

    @Query(value = "select * from facility where name like :name order by id desc ", nativeQuery = true)
    Page<Facility> findAll(Pageable pageable, @Param("name") String name);

    @Transactional
    @Modifying
    @Query(value = "update facility set is_deleted = 1 where id =:id", nativeQuery = true)
    void delete(@Param("id") int id);

    @Query(value = "select name from facility where name = :name", nativeQuery = true)
    String exists(@Param("name") String name);
}
