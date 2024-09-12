import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectHelpComponent } from './project-help.component';

describe('ProjectHelpComponent', () => {
  let component: ProjectHelpComponent;
  let fixture: ComponentFixture<ProjectHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
