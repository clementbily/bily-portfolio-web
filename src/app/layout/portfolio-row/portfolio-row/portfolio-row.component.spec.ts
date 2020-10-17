import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioRowComponent } from './portfolio-row.component';

describe('PortfolioRowComponent', () => {
  let component: PortfolioRowComponent;
  let fixture: ComponentFixture<PortfolioRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
