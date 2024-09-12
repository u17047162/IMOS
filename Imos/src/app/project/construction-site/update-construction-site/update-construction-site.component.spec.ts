import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateConstructionSiteComponent } from './update-construction-site.component';

describe('UpdateConstructionSiteComponent', () => {
  let component: UpdateConstructionSiteComponent;
  let fixture: ComponentFixture<UpdateConstructionSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateConstructionSiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateConstructionSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
