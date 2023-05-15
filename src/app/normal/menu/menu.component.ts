import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  
  estado: boolean = false;
  myForm!: FormGroup;

  mostrarOcultarMenu(): void {
    this.estado ? this.estado = false : this.estado = true;
  }

  seleccionar(): void { //oculto el menu una vez que selecciono una opcion
    this.estado = false;
  }

  submitForm(): void {
    if (this.myForm.valid) {
      const username = this.myForm.get('username')!.value;
      const password = this.myForm.get('password')!.value;

      let datos: any = {
        username: username,
        password: password
      }

      this.loginService.login(datos).subscribe(data => {

        let response: any = data;
        console.log(response);
        if(username === 'admin'){
          const tiempoExpiracion = 3600000; // 1hora
          localStorage.setItem('tokenAdmin', response.accessToken)
        
          setTimeout(() => {
            if(localStorage.getItem('tokenAdmin')){
              localStorage.removeItem('tokenAdmin');
            }
          }, tiempoExpiracion);

          this.router.navigateByUrl("/admin");
        }
      });
      
    } 
  }
}
