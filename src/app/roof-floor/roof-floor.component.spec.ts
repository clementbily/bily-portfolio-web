import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RoofFloorComponent } from './roof-floor.component';

@Component({
  template: '',
  selector: 'app-weather-roof',
})
class WeatherRoofFakeComponent {}

describe('WeatherRoofComponent', () => {
  let component: RoofFloorComponent;
  let fixture: ComponentFixture<RoofFloorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoofFloorComponent, WeatherRoofFakeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoofFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a weather roof child in a bootstrap row', () => {
    const debugElement = fixture.debugElement;
    expect(
      debugElement.query(By.css('.row .col-sm-12 app-weather-roof'))
    ).toBeTruthy('app-weather element in a bootstrap row');
  });
});
