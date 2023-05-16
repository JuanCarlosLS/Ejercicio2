import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { LogingComponent } from './loging/loging.component';
import { BuscadorComponent } from './buscador/buscador.component';

const routes: Routes = [
  {path:'', redirectTo: '/usuario', pathMatch: 'full'},
  {path:'usuario',component: UsuarioComponent},
  {path:'loging',component: LogingComponent},
  {path:'buscador',component: BuscadorComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
