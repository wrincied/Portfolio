import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NikitaKrushkoComponent } from './nikita-krushko.component';

describe('NikitaKrushkoComponent', () => {
  let component: NikitaKrushkoComponent;
  let fixture: ComponentFixture<NikitaKrushkoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NikitaKrushkoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NikitaKrushkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
