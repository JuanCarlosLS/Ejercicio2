import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LogingComponent } from './loging/loging.component';
import { PieDePaginaComponent } from './pie-de-pagina/pie-de-pagina.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { BuscadorComponent } from './buscador/buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LogingComponent,
    PieDePaginaComponent,
    UsuarioComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
