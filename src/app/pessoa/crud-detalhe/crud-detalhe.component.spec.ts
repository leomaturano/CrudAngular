import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDetalheComponent } from './crud-detalhe.component';

describe('CrudDetalheComponent', () => {
  let component: CrudDetalheComponent;
  let fixture: ComponentFixture<CrudDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
