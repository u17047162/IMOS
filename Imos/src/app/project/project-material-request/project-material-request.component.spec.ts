import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMaterialRequestComponent } from './project-material-request.component';

describe('ProjectMaterialRequestComponent', () => {
  let component: ProjectMaterialRequestComponent;
  let fixture: ComponentFixture<ProjectMaterialRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectMaterialRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMaterialRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
