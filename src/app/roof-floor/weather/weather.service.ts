import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SiteMode, WeatherSiteMode } from './weather-site-mode.data';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherSiteMode(): Observable<WeatherSiteMode> {
    return this.http.get<WeatherSiteMode>(environment.siteModeApiUrl).pipe(map(weatherSiteMode => {
      weatherSiteMode.mode = SiteMode[weatherSiteMode.mode as  unknown as string];
      return weatherSiteMode;
    }));
  }
}
