import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from './usuarios';
import { USUARIOS } from './mock-datos';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuariosUrl: string = 'api/usuariosDb';
  private log(message: string) {
    this.messageService.add(`UsuarioService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getUsuarios(): Observable<Usuario[]>{
   //const listaObservabledeUsuarios = of(USUARIOS)
    //this.messageService.add('UsuarioService: usuarios recuperados');
   return this.http.get<Usuario[]>(this.usuariosUrl)
   .pipe(
    tap(_ => this.log('traemos usuarios')),
    catchError(this.handleError<Usuario[]>('getUsuarios', []))
  );
   //return listaObservabledeUsuarios;
  }
  
  getUsuarioUnico(id: number): Observable<Usuario> {
    const url = `${this.usuariosUrl}/${id}`;
    return this.http.get<Usuario>(url).pipe(
      tap(_ => this.log(`fetched usuario id=${id}`)),
      catchError(this.handleError<Usuario>(`getUsuario id=${id}`))
    );
  }

  updateUsuario(usuario: Usuario): Observable<any> {
    return this.http.put(this.usuariosUrl, usuario, this.httpOptions).pipe(
      tap(_ => this.log(`updated usuario id=${usuario.id}`)),
      catchError(this.handleError<any>('updateUsuario'))
    );
  }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  deleteUsuario(usuario: Usuario | number): Observable<Usuario> {
    const id = typeof usuario === 'number' ? usuario : usuario.nom;
    const url = `${this.usuariosUrl}/${id}`;
  
    return this.http.delete<Usuario>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted usuario id=${id}`)),
      catchError(this.handleError<Usuario>('deleteUsuario'))
    );
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  }
