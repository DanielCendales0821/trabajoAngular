import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteInsuranceComponent } from './delete-insurance.component';

describe('DeleteInsuranceComponent', () => {
  let component: DeleteInsuranceComponent;
  let fixture: ComponentFixture<DeleteInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
