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

  private usuariosUrl = 'http://localhost:8080/api/usuarios';

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getUsuarios(): Observable<Usuario[]>{
    console.log(this.http.get<Usuario[]>(this.usuariosUrl))
    return this.http.get<Usuario[]>(this.usuariosUrl)
  }
}
