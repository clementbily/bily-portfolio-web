import { Component } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@Component({
  template: '',
  selector: 'app-portfolio-door',
})
class PortfolioDoorFakeComponent {}
@Component({
  template: '',
  selector: 'app-technical-floor',
})
class TechnicalFloorFakeComponent {}
@Component({
  template: '',
  selector: 'app-mindset-floor',
})
class MindsetFloorFakeComponent {}
@Component({
  template: '',
  selector: 'app-roof-floor',
})
class RoofFloorFakeComponent {}
describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PortfolioDoorFakeComponent,
        TechnicalFloorFakeComponent,
        MindsetFloorFakeComponent,
        RoofFloorFakeComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have all child floors`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    [
      'app-roof-floor',
      'app-mindset-floor',
      'app-technical-floor',
      'app-portfolio-door',
    ].forEach((childSelector) => {
      const { debugElement } = fixture;
      expect(debugElement.query(By.css(childSelector))).toBeTruthy(
        `missing floor ${childSelector}`
      );
    });
  });
});
