import { Component, OnInit } from '@angular/core';
import { CURSOS, USUARIOS } from '../mock-datos';
import { Curso } from '../cursos';
import { Usuario } from '../usuarios';
import { UsuariosService } from '../usuarios.service';
import { MessageService } from '../message.service';
import { UsuarioDetailComponent } from '../usuario-detail/usuario-detail.component';

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

  public getUsuarios() {
   this.usuariosService.getUsuarios()
      .subscribe(listaUsuarios => this.listaUsuarios = listaUsuarios);

  }

  delete(usuario: Usuario): void {
    this.usuarios = this.usuarios.filter(u => u !== usuario);
    this.usuariosService.deleteUsuario(usuario).subscribe();
  }
  
  add(nom: string): void {
    nom = nom.trim();
    if (!nom) { return; }
    this.usuariosService.addUsuario({ nom } as Usuario)
      .subscribe(usuario => {
        this.usuarios.push(usuario);
      });
  }
}
