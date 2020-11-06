import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinsurancecustomerComponent } from './addinsurancecustomer.component';

describe('AddinsurancecustomerComponent', () => {
  let component: AddinsurancecustomerComponent;
  let fixture: ComponentFixture<AddinsurancecustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddinsurancecustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinsurancecustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
