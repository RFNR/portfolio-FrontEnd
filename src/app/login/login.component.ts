import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formulario: FormGroup;
  

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService, private cookieService: CookieService) {
    this.formulario = this.formBuilder.group({
      usuario: ['', Validators.required],
      contraseña: ['', Validators.required],
    });
  }
  

  submitFormulario() {
    if (this.formulario.valid) {
      const usuario = this.formulario.get('usuario')!.value;
      const contraseña = this.formulario.get('contraseña')!.value;
      let datos: any = {
        username: usuario,
        password: contraseña
      }

      this.loginService.login(datos).subscribe(data => {
        let response: any = data;
        console.log(response);
        localStorage.setItem('token', response.accessToken)
        this.router.navigateByUrl("/user");
      });
    } 
  }
  cerrar(){
    this.formulario.reset();
  }

}