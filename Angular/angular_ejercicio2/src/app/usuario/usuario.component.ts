import { Component } from '@angular/core';
import { CURSOS } from '../mock-datos';
import { Curso } from '../cursos';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  cursos = CURSOS;
  selectedCurso?: Curso;

  onSelect(curso: Curso): void {
    this.selectedCurso = curso;
  }
}
