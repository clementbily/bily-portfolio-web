import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BalancedWeatherComponent } from './balanced-weather/balanced-weather.component';
import { DarkWeatherComponent } from './dark-weather/dark-weather.component';
import { LightWeatherComponent } from './light-weather/light-weather.component';
import { WeatherRoofComponent } from './weather-roof.component';

@NgModule({
  declarations: [
    LightWeatherComponent,
    BalancedWeatherComponent,
    DarkWeatherComponent,
    WeatherRoofComponent
  ],
  imports: [CommonModule],
  exports: [
    LightWeatherComponent,
    BalancedWeatherComponent,
    DarkWeatherComponent,
    WeatherRoofComponent
  ],
})
export class WeatherModule {}
