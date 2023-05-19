import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from './usuarios';
import { USUARIOS } from './mock-datos';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private messageService: MessageService) { }

  getUsuarios(): Observable<Usuario[]>{
    this.messageService.add('UsuariosService: fetched usuarios');
    return of(USUARIOS);
  }
}
