import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo1NavComponent } from './demo1-nav.component';

describe('Demo1NavComponent', () => {
  let component: Demo1NavComponent;
  let fixture: ComponentFixture<Demo1NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo1NavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo1NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
