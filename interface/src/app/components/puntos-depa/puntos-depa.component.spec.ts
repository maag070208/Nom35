import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntosDepaComponent } from './puntos-depa.component';

describe('PuntosDepaComponent', () => {
  let component: PuntosDepaComponent;
  let fixture: ComponentFixture<PuntosDepaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntosDepaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntosDepaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
