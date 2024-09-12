import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectStaffComponent } from './add-project-staff.component';

describe('AddProjectStaffComponent', () => {
  let component: AddProjectStaffComponent;
  let fixture: ComponentFixture<AddProjectStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProjectStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
