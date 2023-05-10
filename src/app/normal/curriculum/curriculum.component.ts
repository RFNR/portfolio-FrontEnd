import { Component, OnInit } from '@angular/core';
import { Educacion, Experiencia } from 'src/app/interfaces/curriculum.interface';
import { CurriculumService } from 'src/app/services/curriculum.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit{

  constructor(private curriculumService: CurriculumService){
  }

  ngOnInit() {
    this.curriculumService.obtenerFormaciones().subscribe(datos =>{
      this.curriculumService.educacion = datos;
      this.educacion = datos;
    })

    this.curriculumService.obtenerExperiencias().subscribe(datos =>{
      this.curriculumService.experiencia = datos;
      this.experiencia = datos;
    })
  }

  educacion: Educacion[] = this.curriculumService.educacion;
  experiencia: Experiencia[] = this.curriculumService.experiencia;

}
