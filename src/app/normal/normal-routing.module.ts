import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NormalComponent } from './normal.component';


const routes: Routes = [
  {
    path: '',
    component: NormalComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
   RouterModule
  ]
})
export class NormalRoutingModule { }
