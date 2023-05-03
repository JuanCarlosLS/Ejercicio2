function usuarios(id,dni,nom,ap,us,pas,f,dir,tel,t_us,ac){
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

    let jcls = new usuarios(1,"4876589W","Jaun Carlos","López Sempere","jcls",1234,"img","C. de las lomas blancas",634986426,"1","Si");
    let zls = new usuarios(2,"7866984R","Zaira","López Sempere","zls",1234,"img","C. de las lomas blancas",634983216,"1","Si");
    let erl = new usuarios(3,"9158972E","Emma","Requena López","erl",1234,"img","C. de borja",695866216,"1","Si");

  console.log(jcls);
  console.log(zls);
  console.log(erl);