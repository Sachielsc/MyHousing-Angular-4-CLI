import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo1BodyComponent } from './demo1-body.component';

describe('Demo1BodyComponent', () => {
  let component: Demo1BodyComponent;
  let fixture: ComponentFixture<Demo1BodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo1BodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo1BodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
