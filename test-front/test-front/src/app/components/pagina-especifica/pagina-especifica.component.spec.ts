import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaEspecificaComponent } from './pagina-especifica.component';

describe('PaginaEspecificaComponent', () => {
  let component: PaginaEspecificaComponent;
  let fixture: ComponentFixture<PaginaEspecificaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaEspecificaComponent]
    });
    fixture = TestBed.createComponent(PaginaEspecificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
