import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AventaderComponent } from './aventader.component';

describe('AventaderComponent', () => {
  let component: AventaderComponent;
  let fixture: ComponentFixture<AventaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AventaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AventaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
