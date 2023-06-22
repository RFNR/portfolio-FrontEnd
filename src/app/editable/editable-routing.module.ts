import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditableComponent } from './editable.component';


const routes: Routes = [
  {
    path: '',
    component: EditableComponent
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
export class EditableRoutingModule { }
