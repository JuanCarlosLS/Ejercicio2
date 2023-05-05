//creamos función usuarios
var usuarios = function usuarios(id, dni, nom, ap, us, pas, f, dir, tel, t_us, ac) {
    this.id = id;
    this.dni = dni;
    this.nombre = nom;
    this.apellidos = ap;
    this.usuario = us;
    this.contraseña = pas;
    this.foto = f;
    this.direccion = dir;
    this.telefono = tel;
    this.tipo_usuario = t_us;
    this.activo = ac;
};
//creamos 3 objetos
var jcls = new usuarios(1, "4876589W", "Jaun Carlos", "López Sempere", "jcls", "1234", "img", "C. de las lomas blancas", 634986426, "1", true);
var zls = new usuarios(2, "7866984R", "Zaira", "López Sempere", "zls", "1234", "img", "C. de las lomas blancas", 634983216, "1", true);
var erl = new usuarios(3, "9158972E", "Emma", "Requena López", "erl", "1234", "img", "C. de borja", 695866216, "1", true);
var usuarios_arr = [jcls, zls, erl];
//creamos lafunción cursos
var cursos = function cursos(id, asig) {
    this.id = id;
    this.asignatura = asig;
};
//creamos un objeto por curso
var sop = new cursos(1, "Sistemas Operativos en Red");
var si = new cursos(2, "Seguridad Informática");
var pw = new cursos(3, "Programación Web");
var eie = new cursos(4, "E.I.E");
var r = new cursos(5, "Redes");
var i = new cursos(6, "Ingles");
var cursos_arr = [sop, si, pw, eie, r, i];
//creamos la función asignatturas
var asignaturas = function asignaturas(id, prof) {
    this.id = id;
    this.profesor = prof;
};
//creamos los objetos asignaturas
var vic = new asignaturas(1, "Victor");
var moi = new asignaturas(2, "Moises");
var cri = new asignaturas(3, "cristobal");
var jt = new asignaturas(4, "Jose Tomas");
var jm = new asignaturas(5, "Juan Maria");
var yo = new asignaturas(6, "Yolanda");
var asignaturas_arr = [vic, moi, cri, jt, jm, yo];
// creamos la función notas
var notas = function notas(id, alum, asig, cur, nota) {
    this.id = id;
    this.id_alumno = alum;
    this.id_asignatura = asig;
    this.id_curso = cur;
    this.nota = nota;
};
//creamos los objetos notas
var jcls_sop = new notas(1, 1, 1, 1, 9);
var jcls_si = new notas(2, 1, 2, 2, 7);
var jcls_pw = new notas(3, 1, 3, 3, 10);
var jcls_eie = new notas(4, 1, 4, 4, 6);
var jcls_r = new notas(5, 1, 5, 5, 7);
var jcls_i = new notas(6, 1, 6, 6, 6);
var zls_sop = new notas(7, 2, 1, 1, 5);
var zls_si = new notas(8, 2, 2, 2, 6);
var zls_pw = new notas(9, 2, 3, 3, 9);
var zls_eie = new notas(10, 2, 4, 4, 5);
var zls_r = new notas(11, 2, 5, 5, 5);
var zls_i = new notas(12, 2, 6, 6, 5);
var erl_sop = new notas(13, 3, 1, 1, 8);
var erl_si = new notas(14, 3, 2, 2, 7);
var erl_pw = new notas(15, 3, 3, 3, 10);
var erl_eie = new notas(16, 3, 4, 4, 8);
var erl_r = new notas(17, 3, 5, 5, 6);
var erl_i = new notas(18, 3, 6, 6, 7);
var notas_arr = [jcls_sop, jcls_si, jcls_pw, jcls_eie, jcls_r, jcls_i, zls_sop, zls_si, zls_pw, zls_eie, zls_r, zls_i, erl_sop, erl_si, erl_pw, erl_eie, erl_r, erl_i];
//metemos los arrays en un jason
var jason = { usuarios_arr: usuarios_arr, cursos_arr: cursos_arr, asignaturas_arr: asignaturas_arr, notas_arr: notas_arr };
console.log(jason);
