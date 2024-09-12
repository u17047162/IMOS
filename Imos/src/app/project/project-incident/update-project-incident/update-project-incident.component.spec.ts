import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProjectIncidentComponent } from './update-project-incident.component';

describe('UpdateProjectIncidentComponent', () => {
  let component: UpdateProjectIncidentComponent;
  let fixture: ComponentFixture<UpdateProjectIncidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProjectIncidentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateProjectIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
