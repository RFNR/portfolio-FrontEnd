import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/guard.guard';


const routes: Routes = [
  {
      path: '', 
      loadChildren: () => import('./normal/normal.module').then( m => m.NormalModule),
      pathMatch: 'full'
  },
  {
      path: 'editar',
      loadChildren: () => import('./editable/editable.module').then( m => m.EditableModule),
      canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginModule)
  },
  {
      path: '**',
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
