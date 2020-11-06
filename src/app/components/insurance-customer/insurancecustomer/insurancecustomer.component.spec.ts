import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancecustomerComponent } from './insurancecustomer.component';

describe('InsurancecustomerComponent', () => {
  let component: InsurancecustomerComponent;
  let fixture: ComponentFixture<InsurancecustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsurancecustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurancecustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
