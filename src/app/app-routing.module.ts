import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NormalComponent } from './normal/normal.component';
import { EditableComponent } from './editable/editable.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {
      path: 'user', /* Me posiciono en la pagina principal -> http://localhost:4200 + '' = http://localhost:4200 */ 
      component: NormalComponent, /* Se muestra este componente en la pagina principal */
      pathMatch: 'full'
  },
  {
      path: 'admin',
      component: EditableComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
      path: '**', /* http://localhost:4200/cualquiercosa te redirije a http://localhost:4200 */
      redirectTo: ''
  }
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
