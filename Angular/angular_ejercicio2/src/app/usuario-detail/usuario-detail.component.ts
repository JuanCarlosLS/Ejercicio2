import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Usuario } from '../usuarios';

@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})
export class UsuarioDetailComponent {
  
  save(): void {
    //this.usuariosService.updateUsuario(this.usuario)
      //.subscribe(() => this.goBack());
  }
}
