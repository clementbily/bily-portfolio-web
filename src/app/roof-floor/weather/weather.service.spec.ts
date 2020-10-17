import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { WeatherService } from './weather.service';
import { environment } from 'src/environments/environment';

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call service through http', () => {
    const httpTestingController = TestBed.inject(HttpTestingController);
    service.getWeatherSiteMode().subscribe(() => {});
    const testRequest = httpTestingController.expectOne(
      environment.siteModeApiUrl
    );
    testRequest.flush({ siteMode: 'BALANCED' });
    httpTestingController.verify();
  });
});
