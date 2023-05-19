import { Component } from '@angular/core';
import { CURSOS, USUARIOS } from '../mock-datos';
import { Curso } from '../cursos';
import { Usuario } from '../usuarios';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  
  constructor(private usuariosService: UsuariosService) {}

  usuarios = USUARIOS;
  cursos = CURSOS;
  selectedCurso?: Curso;
  selectedUsuario?: Usuario;

  onSelect(curso: Curso, usuario: Usuario): void {
    this.selectedCurso = curso;
    this. selectedUsuario = usuario;
  }
  
  getUsuarios(): void {
    this.usuariosService.getUsuarios()
      .subscribe(usuarios => this.usuarios = usuarios);
  }

  ngOnInit() {
    this.getUsuarios();
  }
}
