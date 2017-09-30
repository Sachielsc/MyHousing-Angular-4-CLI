import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo1HeadComponent } from './demo1-head.component';

describe('Demo1HeadComponent', () => {
  let component: Demo1HeadComponent;
  let fixture: ComponentFixture<Demo1HeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo1HeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo1HeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
