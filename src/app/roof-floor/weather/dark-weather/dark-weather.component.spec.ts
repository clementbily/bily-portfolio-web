import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DarkWeatherComponent } from './dark-weather.component';


describe('DarkWeatherComponent', () => {
  let component: DarkWeatherComponent;
  let fixture: ComponentFixture<DarkWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
