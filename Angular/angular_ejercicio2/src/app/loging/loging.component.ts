import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-loging',
  templateUrl: './loging.component.html',
  styleUrls: ['./loging.component.css']
})
export class LogingComponent implements  OnInit{
  Usuario1: [];
  password:  [];
  
  constructor(public usuariosService: UsuariosService) {
    this.Usuario1 = [];
    this.password = [];
   }

login(){
  const user = { Usuario1: this.Usuario1, password: this.password };
  this.usuariosService.login(user).subscribe((data) => {
    console.log(data);
  });
}

  ngOnInit() {
    // Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event: { preventDefault: () => void; stopPropagation: () => void; }) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
  }

}
