package com.example.demo.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class usuarioscontroller {

    private final usuariosservice usuariosservice;

    @Autowired
    public usuarioscontroller(usuariosservice usuariosservice) {
        this.usuariosservice = usuariosservice;
    }

    @GetMapping
    public ResponseEntity<List<usuarios>> getAllusuarios() {
        return ResponseEntity.ok(usuariosservice.findAll());
    }

    @PostMapping
    public ResponseEntity<usuarios> createusuarios(@RequestBody usuarios usuarios) {
        return ResponseEntity.ok(usuariosservice.save(usuarios));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteusuarios(@PathVariable Long id) {
        usuariosservice.delete(id);
        return ResponseEntity.ok().build();
    }

    // ... otros métodos según sea necesario
}