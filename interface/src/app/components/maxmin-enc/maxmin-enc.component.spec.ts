import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxminEncComponent } from './maxmin-enc.component';

describe('MaxminEncComponent', () => {
  let component: MaxminEncComponent;
  let fixture: ComponentFixture<MaxminEncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxminEncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxminEncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
