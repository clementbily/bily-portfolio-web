import {
  async,
  ComponentFixture,

  fakeAsync, TestBed
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { WeatherRoofComponent } from './weather-roof.component';
import { SiteMode } from './weather-site-mode.data';
import { WeatherService } from './weather.service';


describe('WeatherRoofComponent', () => {
  let component: WeatherRoofComponent;
  let fixture: ComponentFixture<WeatherRoofComponent>;
  let weatherServiceMock: jasmine.SpyObj<WeatherService>;
  beforeEach(async(() => {
    weatherServiceMock = jasmine.createSpyObj<WeatherService>(
      'weatherService',
      ['getWeatherSiteMode']
    );
    TestBed.configureTestingModule({
      declarations: [WeatherRoofComponent],
      providers: [
        {
          provide: WeatherService,
          useValue: weatherServiceMock,
        },
      ],
    }).compileComponents();
  }));
  const arrangeComponentCreation = () => {
    fixture = TestBed.createComponent(WeatherRoofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  };

  it('should create', () => {
    weatherServiceMock.getWeatherSiteMode.and.returnValue(
      of({ mode: SiteMode.LIGHT })
    );
    arrangeComponentCreation();
    expect(component).toBeTruthy();
  });
  it('should haave a app-light-weather child on light site mode', () => {
    weatherServiceMock.getWeatherSiteMode.and.returnValue(
      of({ mode: SiteMode.LIGHT })
    );
    arrangeComponentCreation();
    const debugElement = fixture.debugElement;
    expect(debugElement.query(By.css('g[light-weather]'))).toBeTruthy(
      'light-weather component  child with dark sitemode'
    );
  });
  it('should haave a balanced-weather child on balanced site mode', () => {
    weatherServiceMock.getWeatherSiteMode.and.returnValue(
      of({ mode: SiteMode.BALANCED })
    );
    arrangeComponentCreation();
    const debugElement = fixture.debugElement;
    expect(debugElement.query(By.css('g[balanced-weather]'))).toBeTruthy(
      'balanced component  child with dark sitemode'
    );
  });
  it('should haave a dark-weather child on dark site mode', fakeAsync(() => {
    weatherServiceMock.getWeatherSiteMode.and.returnValue(
      of({ mode: SiteMode.DARK })
    );
    arrangeComponentCreation();
    const debugElement = fixture.debugElement;
    expect(debugElement.query(By.css('g[dark-weather]'))).toBeTruthy(
      'dark-weather component  child with dark sitemode'
    );
  }));
});
