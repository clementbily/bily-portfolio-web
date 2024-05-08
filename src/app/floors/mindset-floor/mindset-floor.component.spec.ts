import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PortfolioRowComponent } from 'src/app/layout/portfolio-row/portfolio-row/portfolio-row.component';
import { MindsetFloorComponent } from './mindset-floor.component';


describe('MindsetFloorComponent', () => {
  let component: MindsetFloorComponent;
  let fixture: ComponentFixture<MindsetFloorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MindsetFloorComponent, PortfolioRowComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MindsetFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show mindset images', () => {
    const debugElement = fixture.debugElement;
    expect(
      debugElement.query(By.css('app-portfolio-row [leftWindow] img[src$="arrow-circle.svg"]'))
    ).toBeTruthy('arrow circle left window');
    expect(
      debugElement.query(By.css('img[src$="collaboration.svg"]'))
    ).toBeTruthy('arrow circle left window');
  });
});
