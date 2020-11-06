import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTechnicalComponent } from './update-technical.component';

describe('UpdateTechnicalComponent', () => {
  let component: UpdateTechnicalComponent;
  let fixture: ComponentFixture<UpdateTechnicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTechnicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTechnicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
