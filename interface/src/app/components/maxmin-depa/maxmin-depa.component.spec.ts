import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxminDepaComponent } from './maxmin-depa.component';

describe('MaxminDepaComponent', () => {
  let component: MaxminDepaComponent;
  let fixture: ComponentFixture<MaxminDepaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxminDepaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxminDepaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
