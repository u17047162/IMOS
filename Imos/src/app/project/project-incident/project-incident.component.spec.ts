import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectIncidentComponent } from './project-incident.component';

describe('ProjectIncidentComponent', () => {
  let component: ProjectIncidentComponent;
  let fixture: ComponentFixture<ProjectIncidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectIncidentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
