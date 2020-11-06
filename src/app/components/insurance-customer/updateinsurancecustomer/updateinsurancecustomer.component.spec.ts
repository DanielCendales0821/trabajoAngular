import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateinsurancecustomerComponent } from './updateinsurancecustomer.component';

describe('UpdateinsurancecustomerComponent', () => {
  let component: UpdateinsurancecustomerComponent;
  let fixture: ComponentFixture<UpdateinsurancecustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateinsurancecustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateinsurancecustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
