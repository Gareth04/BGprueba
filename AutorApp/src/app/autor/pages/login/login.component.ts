import { Component } from '@angular/core';
import { autorService } from '../../services/autor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //Inicialización de variables
  log_email: string = "";
  log_psswd: string = "";
  constructor(private service: autorService, private router: Router){}
  login(){//Metodo de logueo
    switch(""){
      case this.log_email.trim():
        alert("Ingrese su email")
        break;
      case this.log_psswd.trim():
        alert("Ingrese su contraseña")
        break;
      default:
        this.service.login(this.log_email, this.log_psswd).subscribe(
          response => {
            // Lógica para el caso de éxito
            console.log('Inicio de sesión exitoso:', response);
            this.router.navigate(['/carrito']);
          },
          error => {
            // Manejo de errores
            console.error('Error en el inicio de sesión:', error);
            // Puedes mostrar un mensaje de error al usuario o realizar otra acción
          }
        );
    }
  }
}
