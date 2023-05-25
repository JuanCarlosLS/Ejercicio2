import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from './usuarios';
import { USUARIOS } from './mock-datos';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  login(user: any): Observable<any> {
    return this.http.post("http://localhost:8080/api/usuarios", user);
  }
  private usuariosUrl: string = 'api/usuariosDb';
  private log(message: string) {
    this.messageService.add(`UsuarioService: ${message}`);
  }

 // setToken(token: String) {
   // this.cookies.set("token", token);
  //}
  getToken() {
    return this.cookies.get("token");
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
  
  getUsuarioNo404<Data>(id: number): Observable<Usuario> {
    const url = `${this.usuariosUrl}/?id=${id}`;
    return this.http.get<Usuario[]>(url)
      .pipe(
        map(usuarios => usuarios[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
          this.log(`${outcome} usuario id=${id}`);
        }),
        catchError(this.handleError<Usuario>(`getUsuario id=${id}`))
      );
  }
  getUsuario(id: number): Observable<Usuario> {
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

  deleteUsuario(id: number): Observable<Usuario> {
    const url = `${this.usuariosUrl}/${id}`;
  
    return this.http.delete<Usuario>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted usuario id=${id}`)),
      catchError(this.handleError<Usuario>('deleteUsuario'))
    );
  }

  addUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.usuariosUrl, usuario, this.httpOptions).pipe(
      tap((newUsuario: Usuario) => this.log(`added usuario w/ id=${usuario.id}`)),
      catchError(this.handleError<Usuario>('addUsuario'))
    );
  }

  searchUsuarios(term: string): Observable<Usuario[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Usuario[]>(`${this.usuariosUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found usuario matching "${term}"`) :
         this.log(`no usuario matching "${term}"`)),
      catchError(this.handleError<Usuario[]>('searchUsuarios', []))
    );
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private cookies: CookieService) { }
  }
