import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo1FormComponent } from './demo1-form.component';

describe('Demo1FormComponent', () => {
  let component: Demo1FormComponent;
  let fixture: ComponentFixture<Demo1FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo1FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo1FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
