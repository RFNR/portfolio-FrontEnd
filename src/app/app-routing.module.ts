import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditableComponent } from './webpage/editable/editable.component';
import { NormalComponent } from './webpage/normal/normal.component';

const routes: Routes = [
  {
      path: '', /* Me posiciono en la pagina principal -> http://localhost:4200 + '' = http://localhost:4200 */ 
      component: NormalComponent, /* Se muestra este componente en la pagina principal */
      pathMatch: 'full'
  },
  {
      path: 'perfil',
      component: EditableComponent
  },
  {
      path: '**', /* http://localhost:4200/cualquiercosa te redirije a http://localhost:4200 */
      redirectTo: ''
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
