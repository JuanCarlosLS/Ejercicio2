import { Component } from '@angular/core';
import { Usuario } from '../usuarios';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  listaUsuarios: any =  [];

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios() {
    this.usuariosService.getUsuarios()
       .subscribe(listaUsuarios => this.listaUsuarios = listaUsuarios);
 
   } 
}
