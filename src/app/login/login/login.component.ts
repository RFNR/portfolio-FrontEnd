import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  errorMessage!: string;
  validador: boolean = false;

  constructor(
      private formBuilder: FormBuilder,
      private http: HttpClient,
      private router: Router
    ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.errorMessage = localStorage.getItem('error')!
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.http.post('http://localhost:8080/login', this.loginForm.value).subscribe(datos => {

        let token: any = datos
        localStorage.setItem('authData', token.token)
        localStorage.removeItem('error');

        console.log(datos);
        this.validador = false;
        this.router.navigate(['/editar']);
 

        const tokenLive = localStorage.getItem('authData')
        // Verifica si el token existe
        if (tokenLive) {
          // Establece un temporizador para eliminar el token después del tiempo de expiración
          setTimeout(() => {
            // Elimina el token del local storage
            localStorage.removeItem('authData');
          }, 7200000);
}

      }, error => {
        localStorage.setItem('error', 'Datos incorrectos.')
        this.validador = true;
      })
      console.log(this.loginForm.value)
    }
  }
}
