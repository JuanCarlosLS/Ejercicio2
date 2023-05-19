package com.example.demo.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.demo.model.usuarios;

@Repository
public interface usuariosRepository extends JpaRepository<usuarios, Long>{
	
	List<usuarios> findByNombre(@Param("name") String name);
	
}