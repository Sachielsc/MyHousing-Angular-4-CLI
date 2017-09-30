import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo1FooterComponent } from './demo1-footer.component';

describe('Demo1FooterComponent', () => {
  let component: Demo1FooterComponent;
  let fixture: ComponentFixture<Demo1FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo1FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo1FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
