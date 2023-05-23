import { Component, OnInit } from '@angular/core';
import { CURSOS, USUARIOS } from '../mock-datos';
import { Curso } from '../cursos';
import { Usuario } from '../usuarios';
import { UsuariosService } from '../usuarios.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit{
  
  constructor(private usuariosService: UsuariosService,
              private messageService: MessageService) {}

  listaUsuarios: any =  [];
  usuarios = USUARIOS;
  cursos = CURSOS;
  selectedCurso?: Curso;
  selectedUsuario?: Usuario;

  onSelect(curso: Curso, usuario: Usuario): void {
    this.selectedCurso = curso;
    this. selectedUsuario = usuario;
    this.messageService.add(`UsuariosComponent: Selected usuario id=${usuario.id}`);
  }
 
  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios() {
   this.usuariosService.getUsuarios()
      .subscribe(listaUsuarios => this.listaUsuarios = listaUsuarios);

  }

  
}
