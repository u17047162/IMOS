import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBasketComponent } from './project-basket.component';

describe('ProjectBasketComponent', () => {
  let component: ProjectBasketComponent;
  let fixture: ComponentFixture<ProjectBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectBasketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
