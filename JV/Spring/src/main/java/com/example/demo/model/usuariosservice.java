package com.example.demo.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class usuariosservice {

    private final usuariosrepository usuariosrepository;

    @Autowired
    public usuariosservice(usuariosrepository usuariosrepository) {
        this.usuariosrepository = usuariosrepository;
    }

    public List<usuarios> findAll() {
        return usuariosrepository.findAll();
    }

    public usuarios save(usuarios usuarios) {
        return usuariosrepository.save(usuarios);
    }

    public void delete(Long id) {
        usuariosrepository.deleteById(id);
    }

    // ... otros métodos según sea necesario
}
