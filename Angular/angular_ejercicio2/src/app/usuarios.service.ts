import { Injectable } from '@angular/core';
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

  private usuariosUrl = 'http://localhost:8080/api/usuarios';

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

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.usuariosUrl)
    .pipe(
      catchError(this.handleError<Usuario[]>('getUsuarios', []))
    );
  }
}
