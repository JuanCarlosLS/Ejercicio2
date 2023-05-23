import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Usuario } from './usuarios';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
createDb(){
  const usuariosDb =[
    {id: 1, dni:'4876589W', nom:'Juan Carlos', ap:'Lopez Sempere', us: 'jcls', pas:'1234', f:'img', dir:'C. de las lomas blancas', tel:634986426,t_us:'1',ac:true },
    {id: 2, dni:'7866984R', nom:'Zaira', ap:'Lopez Sempere', us: 'zls', pas:'1234', f:'img', dir:'C. de las lomas blancas', tel:634983216,t_us:'1',ac:true },
    {id: 3, dni:'9158972E', nom:'Emma', ap:'Requena Lopez', us: 'erl', pas:'1234', f:'img', dir:'Plaza la viña', tel:695866216,t_us:'1',ac:true }
];
return {usuariosDb};
}
 
genId(usuariosDb: Usuario[]): number {
  return usuariosDb.length > 0 ? Math.max(...usuariosDb.map(usuariosDb => usuariosDb.id)) + 1 : 11;
}
}