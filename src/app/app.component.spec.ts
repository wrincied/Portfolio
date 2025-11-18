import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Title } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

it(`should set document title to 'IllustrationCatalog'`, () => {
  const fixture = TestBed.createComponent(AppComponent);
  const titleService = TestBed.inject(Title);
  spyOn(titleService, 'setTitle');
  fixture.detectChanges();
  expect(titleService.setTitle).toHaveBeenCalledWith('IllustrationCatalog');
});
});

