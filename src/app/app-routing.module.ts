import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NormalComponent } from './normal/normal.component';
import { EditableComponent } from './editable/editable.component';
import { LoginComponent } from './login/login.component';
import { UserGuardGuard } from './guard/user-guard.guard';
import { AdminGuardGuard } from './guard/admin-guard.guard';



const routes: Routes = [
  {
      path: 'user', 
      component: NormalComponent, 
      canActivate: [UserGuardGuard]
  },
  {
      path: 'admin',
      component: EditableComponent,
      canActivate: [AdminGuardGuard]
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
