import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteinsurancecustomerComponent } from './deleteinsurancecustomer.component';

describe('DeleteinsurancecustomerComponent', () => {
  let component: DeleteinsurancecustomerComponent;
  let fixture: ComponentFixture<DeleteinsurancecustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteinsurancecustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteinsurancecustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
