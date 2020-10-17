import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDoorComponent } from './portfolio-door.component';

describe('PortfolioDoorComponent', () => {
  let component: PortfolioDoorComponent;
  let fixture: ComponentFixture<PortfolioDoorComponent>;

  beforeEach(async(() => {
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
