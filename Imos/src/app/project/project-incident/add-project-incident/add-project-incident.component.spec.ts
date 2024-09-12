import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectIncidentComponent } from './add-project-incident.component';

describe('AddProjectIncidentComponent', () => {
  let component: AddProjectIncidentComponent;
  let fixture: ComponentFixture<AddProjectIncidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProjectIncidentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProjectIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
