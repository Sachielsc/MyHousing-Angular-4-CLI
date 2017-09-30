import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo1CarouselComponent } from './demo1-carousel.component';

describe('Demo1CarouselComponent', () => {
  let component: Demo1CarouselComponent;
  let fixture: ComponentFixture<Demo1CarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo1CarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo1CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
