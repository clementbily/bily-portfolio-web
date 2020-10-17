import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MindsetFloorComponent } from './floors/mindset-floor/mindset-floor.component';
import { TechnicalFloorComponent } from './floors/technical-floor/technical-floor/technical-floor.component';
import { PortfolioRowComponent } from './layout/portfolio-row/portfolio-row/portfolio-row.component';
import { PortfolioDoorComponent } from './portfolio-door/portfolio-door/portfolio-door.component';
import { RoofFloorComponent } from './roof-floor/roof-floor.component';
import { WeatherModule } from './roof-floor/weather/weather.module';



@NgModule({
  declarations: [
    AppComponent,
    PortfolioRowComponent,
    PortfolioDoorComponent,
    TechnicalFloorComponent,
    MindsetFloorComponent,
    RoofFloorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    WeatherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
