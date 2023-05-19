package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.usuarios;
import com.example.demo.repository.usuariosRepository;

@RestController
@RequestMapping("/api")
public class usuariosController {
	
	@Autowired
	private usuariosRepository repository;
	
	
	@GetMapping("/usuarios")
	public List<usuarios> allusuarios(){
		return repository.findAll();
	}
	
	@GetMapping("/usuarios/{name}")
	public List<usuarios> findByNombre(@PathVariable("name") String name) {
		return repository.findByNombre(name);
	}
	
	@PostMapping("/usuarios")
	public usuarios createusuarios(@RequestBody usuarios usuarios) {
		return repository.save(usuarios);
	}
	
	@PutMapping("/usuarios/{id}")
	public usuarios updateusuarios(@PathVariable int id ,@RequestBody usuarios usuarios) {
		return repository.save(usuarios);
	}
	
	@DeleteMapping("/usuarios/{id}")
	public void deleteusuarios(@PathVariable("id") Long id) {
		repository.deleteById(id);
	}
}