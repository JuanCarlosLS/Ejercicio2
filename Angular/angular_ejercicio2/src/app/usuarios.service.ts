import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from './usuarios';
import { USUARIOS } from './mock-datos';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuariosUrl: string = 'api/usuariosDb';
  private log(message: string) {
    this.messageService.add(`UsuarioService: ${message}`);
  }

  getUsuarios(): Observable<Usuario[]>{
   //const listaObservabledeUsuarios = of(USUARIOS)
    this.messageService.add('UsuarioService: usuarios recuperados');
   return this.http.get<Usuario[]>(this.usuariosUrl);
   //return listaObservabledeUsuarios;
  }
  
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  }
