import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectMaterialComponent } from './add-project-material.component';

describe('AddProjectMaterialComponent', () => {
  let component: AddProjectMaterialComponent;
  let fixture: ComponentFixture<AddProjectMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProjectMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProjectMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
