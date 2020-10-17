import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PortfolioRowComponent } from 'src/app/layout/portfolio-row/portfolio-row/portfolio-row.component';
import { TechnicalFloorComponent } from './technical-floor.component';


describe('TechnicalFloorComponent', () => {
  let component: TechnicalFloorComponent;
  let fixture: ComponentFixture<TechnicalFloorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalFloorComponent, PortfolioRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show technical images in a row', () => {
    const debugElement = fixture.debugElement;
    expect(
      debugElement.query(By.css('app-portfolio-row [leftWindow] img[src$="java-logo.svg"]'))
    ).toBeTruthy('arrow circle left window');
    expect(
      debugElement.query(By.css('app-portfolio-row [rightWindow] img[src$="node.js-logo.svg"]'))
    ).toBeTruthy('arrow circle right window');
  });

});
