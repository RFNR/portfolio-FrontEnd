import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHabilidadComponent } from './delete-habilidad.component';

describe('DeleteHabilidadComponent', () => {
  let component: DeleteHabilidadComponent;
  let fixture: ComponentFixture<DeleteHabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteHabilidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteHabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
