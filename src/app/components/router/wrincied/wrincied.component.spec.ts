import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrinciedComponent } from './wrincied.component';

describe('WrinciedComponent', () => {
  let component: WrinciedComponent;
  let fixture: ComponentFixture<WrinciedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrinciedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrinciedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
