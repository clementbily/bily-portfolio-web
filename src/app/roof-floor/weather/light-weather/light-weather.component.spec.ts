import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LightWeatherComponent } from './light-weather.component';


describe('LightWeatherComponent', () => {
  let component: LightWeatherComponent;
  let fixture: ComponentFixture<LightWeatherComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LightWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
