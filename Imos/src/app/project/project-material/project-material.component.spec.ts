import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMaterialComponent } from './project-material.component';

describe('ProjectMaterialComponent', () => {
  let component: ProjectMaterialComponent;
  let fixture: ComponentFixture<ProjectMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
