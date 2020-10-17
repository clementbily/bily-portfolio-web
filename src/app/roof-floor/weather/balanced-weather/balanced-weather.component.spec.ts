import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BalancedWeatherComponent } from './balanced-weather.component';


describe('BalancedWeatherComponent', () => {
  let component: BalancedWeatherComponent;
  let fixture: ComponentFixture<BalancedWeatherComponent>;

  beforeEach(async(() => {
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
