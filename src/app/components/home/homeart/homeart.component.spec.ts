import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeartComponent } from './homeart.component';

describe('HomeartComponent', () => {
  let component: HomeartComponent;
  let fixture: ComponentFixture<HomeartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
