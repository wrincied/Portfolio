import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FelixTrexComponent } from './felix-trex.component';

describe('FelixTrexComponent', () => {
  let component: FelixTrexComponent;
  let fixture: ComponentFixture<FelixTrexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FelixTrexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FelixTrexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
