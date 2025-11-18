import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotionDesignComponent } from './motion-design.component';

describe('MotionDesignComponent', () => {
  let component: MotionDesignComponent;
  let fixture: ComponentFixture<MotionDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotionDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotionDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
