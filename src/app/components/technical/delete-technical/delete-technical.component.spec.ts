import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTechnicalComponent } from './delete-technical.component';

describe('DeleteTechnicalComponent', () => {
  let component: DeleteTechnicalComponent;
  let fixture: ComponentFixture<DeleteTechnicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTechnicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTechnicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
