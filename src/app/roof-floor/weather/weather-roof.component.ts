import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WeatherSiteMode, SiteMode } from './weather-site-mode.data';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather-roof',
  templateUrl: './weather-roof.component.svg',
  styleUrls: ['./weather-roof.component.css'],
})
export class WeatherRoofComponent {
  public weatherSiteMode$: Observable<string> ;

  constructor(private weatherService: WeatherService) {
    this.weatherSiteMode$ = this.weatherService
      .getWeatherSiteMode()
      .pipe(map((weatherSiteMode) => SiteMode[weatherSiteMode.mode]));
  }

}
