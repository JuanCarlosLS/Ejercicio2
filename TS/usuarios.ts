//creamos función usuarios
const usuarios = function usuarios(id:number,dni:string,nom:string,ap:string,us:string,pas:string,f:string,dir:string,tel:number,t_us:string,ac:boolean){
  this.id=id;
  this.dni=dni;
  this.nombre=nom;
  this.apellidos=ap;
  this.usuario=us;
  this.contraseña=pas;
  this.foto=f;
  this.direccion=dir;
  this.telefono=tel;
  this.tipo_usuario=t_us;
  this.activo=ac;
}

  //creamos 3 objetos
  let jcls = new usuarios(1,"4876589W","Jaun Carlos","López Sempere","jcls","1234","img","C. de las lomas blancas",634986426,"1",true);
  let zls = new usuarios(2,"7866984R","Zaira","López Sempere","zls","1234","img","C. de las lomas blancas",634983216,"1",true);
  let erl = new usuarios(3,"9158972E","Emma","Requena López","erl","1234","img","C. de borja",695866216,"1",true);

const usuarios_arr = [jcls,zls,erl];

//creamos lafunción cursos
const cursos =  function cursos(id:number,asig:string){
  this.id=id;
  this.asignatura=asig; 
}

//creamos un objeto por curso
let sop = new cursos(1,"Sistemas Operativos en Red");
let si = new  cursos(2,"Seguridad Informática");
let pw = new cursos(3,"Programación Web");
let eie = new cursos(4,"E.I.E");
let r = new cursos(5,"Redes");
let i = new cursos(6,"Ingles");

const cursos_arr = [sop,si,pw,eie,r,i];

//creamos la función asignatturas
const asignaturas = function asignaturas(id:number,prof:string){
this.id=id;
this.profesor=prof;
}

//creamos los objetos asignaturas
let vic = new asignaturas(1,"Victor");
let moi = new asignaturas(2,"Moises");
let cri = new asignaturas(3,"cristobal");
let jt = new asignaturas(4,"Jose Tomas");
let jm = new asignaturas(5,"Juan Maria");
let yo = new asignaturas(6,"Yolanda");

const asignaturas_arr  = [vic,moi,cri,jt,jm,yo];

// creamos la función notas
const notas = function notas(id:number,alum:number,asig:number,cur:number,nota:number){
this.id  = id;
this.id_alumno = alum;
this.id_asignatura = asig;
this.id_curso = cur;
this.nota = nota;
}



//creamos los objetos notas
let jcls_sop = new notas(1,1,1,1,9);
let jcls_si = new notas(2,1,2,2,7);
let jcls_pw = new notas(3,1,3,3,10);
let jcls_eie = new notas(4,1,4,4,6);
let jcls_r = new notas(5,1,5,5,7);
let jcls_i = new notas(6,1,6,6,6);
let zls_sop = new notas(7,2,1,1,5);
let zls_si = new notas(8,2,2,2,6);
let zls_pw = new notas(9,2,3,3,9);
let zls_eie = new notas(10,2,4,4,5);
let zls_r = new notas(11,2,5,5,5);
let zls_i = new notas(12,2,6,6,5);
let erl_sop = new notas(13,3,1,1,8);
let erl_si = new notas(14,3,2,2,7);
let erl_pw = new notas(15,3,3,3,10);
let erl_eie = new notas(16,3,4,4,8);
let erl_r = new notas(17,3,5,5,6);
let erl_i = new notas(18,3,6,6,7);

const notas_arr = [jcls_sop,jcls_si,jcls_pw,jcls_eie,jcls_r,jcls_i,zls_sop,zls_si,zls_pw,zls_eie,zls_r,zls_i,erl_sop,erl_si,erl_pw,erl_eie,erl_r,erl_i]

//metemos los arrays en un jason
const jason = {usuarios_arr,cursos_arr,asignaturas_arr,notas_arr};

console.log(jason);