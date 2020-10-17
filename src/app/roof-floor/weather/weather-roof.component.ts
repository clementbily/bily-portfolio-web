import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WeatherSiteMode, SiteMode } from './weather-site-mode.data';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather-roof',
  templateUrl: './weather-roof.component.svg',
  styleUrls: ['./weather-roof.component.scss'],
})
export class WeatherRoofComponent implements OnInit {
  public weatherSiteMode$: Observable<string>;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherSiteMode$ = this.weatherService
      .getWeatherSiteMode()
      .pipe(map((weatherSiteMode) => SiteMode[weatherSiteMode.mode]));
  }
}
