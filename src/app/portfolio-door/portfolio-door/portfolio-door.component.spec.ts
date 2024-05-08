import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PortfolioDoorComponent } from './portfolio-door.component';

describe('PortfolioDoorComponent', () => {
  let component: PortfolioDoorComponent;
  let fixture: ComponentFixture<PortfolioDoorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioDoorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
