import { Component } from '@angular/core';
import { SobreMiService } from 'src/app/services/sobre-mi.service';

@Component({
  selector: 'app-delete-interes',
  templateUrl: './delete-interes.component.html',
  styleUrls: ['./delete-interes.component.css']
})
export class DeleteInteresComponent {

  constructor(private sobreMiService: SobreMiService){}

  eliminar(){
    this.sobreMiService.eliminarIntereses(this.sobreMiService.id!).subscribe();
  }
}
