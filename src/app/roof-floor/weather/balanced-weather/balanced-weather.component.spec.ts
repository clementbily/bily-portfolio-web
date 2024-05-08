import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BalancedWeatherComponent } from './balanced-weather.component';


describe('BalancedWeatherComponent', () => {
  let component: BalancedWeatherComponent;
  let fixture: ComponentFixture<BalancedWeatherComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BalancedWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalancedWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
