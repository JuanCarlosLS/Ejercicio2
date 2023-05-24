import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Usuario } from '../usuarios';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})
export class UsuarioDetailComponent implements OnInit{
  usuario: Usuario | undefined;

  constructor(
    private route: ActivatedRoute,
    private usuariosService: UsuariosService,
    private location: Location
  ){}

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.usuariosService.getUsuario(id)
    .subscribe(usuario => this.usuario = usuario);
  }

  goBack(): void {
    this.location.back();
  }


  save(): void {
    if (this.usuario) {
      this.usuariosService.updateUsuario(this.usuario)
        .subscribe(() => this.goBack());
    }
  }
}
