package com.book.repository;

import com.book.model.Roles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface IRoleRepository extends JpaRepository<Roles, Integer> {

    @Modifying
    @Query(value = "insert into roles (name, status) values (:name, 0)", nativeQuery = true)
    void save(@Param("name") String name);
}
