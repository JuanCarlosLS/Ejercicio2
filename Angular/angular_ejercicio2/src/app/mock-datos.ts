import{Asignatura} from './asignaturas';
import { Usuario } from './usuarios';
import { Curso } from './cursos';
import { Nota } from './notas';

export const USUARIOS: Usuario[]=[
    {id: 1, dni:'4876589W', nom:'Juan Carlos', ap:'Lopez Sempere', us: 'jcls', pas:'1234', f:'img', dir:'C. de las lomas blancas', tel:634986426,t_us:'1',ac:true },
    {id: 1, dni:'7866984R', nom:'Zaira', ap:'Lopez Sempere', us: 'zls', pas:'1234', f:'img', dir:'C. de las lomas blancas', tel:634983216,t_us:'1',ac:true },
    {id: 1, dni:'9158972E', nom:'Emma', ap:'Requena Lopez', us: 'erl', pas:'1234', f:'img', dir:'Plaza la viña', tel:695866216,t_us:'1',ac:true }
];

export const CURSOS: Curso[]=[
      {id: 1, asig:'Sistemas Operativos en Red'},
      {id: 2, asig:'Seguridad Informática'},
      {id: 3, asig:'Programación Web'},
      {id: 4, asig:'E.I.E'},
      {id: 5, asig:'Redes'},
      {id: 6, asig:'Ingles'}
]

export const ASIGNATURAS: Asignatura[] = [
    {id: 1, prof:'Victor'},
    {id: 2, prof:'Moises'},
    {id: 3, prof:'cristobal'},
    {id: 4, prof:'Jose Tomas'},
    {id: 5, prof:'Juan Maria'},
    {id: 6, prof:'Yolanda'}
];

export const NOTAS: Nota[] = [
      {id: 1, alum: 1, asig: 1, cur: 1, nota: 9},
      {id: 2, alum: 1, asig: 2, cur: 2, nota: 7},
      {id: 3, alum: 1, asig: 3, cur: 3, nota: 10},
      {id: 4, alum: 1, asig: 4, cur: 4, nota: 6},
      {id: 5, alum: 1, asig: 5, cur: 5, nota: 7},
      {id: 6, alum: 1, asig: 6, cur: 6, nota: 6},
      {id: 7, alum: 2, asig: 1, cur: 1, nota: 5},
      {id: 8, alum: 2, asig: 2, cur: 2, nota: 6},
      {id: 9, alum: 2, asig: 3, cur: 3, nota: 9},
      {id: 10, alum: 2, asig: 4, cur: 4, nota: 5},
      {id: 11, alum: 2, asig: 5, cur: 5, nota: 5},
      {id: 12, alum: 2, asig: 6, cur: 6, nota: 5},
      {id: 13, alum: 3, asig: 1, cur: 1, nota: 8},
      {id: 14, alum: 3, asig: 2, cur: 2, nota: 7},
      {id: 15, alum: 3, asig: 3, cur: 3, nota: 10},
      {id: 16, alum: 3, asig: 4, cur: 4, nota: 8},
      {id: 17, alum: 3, asig: 5, cur: 5, nota: 6},
      {id: 18, alum: 3, asig: 6, cur: 6, nota: 7}
]