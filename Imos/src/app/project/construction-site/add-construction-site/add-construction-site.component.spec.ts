import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConstructionSiteComponent } from './add-construction-site.component';

describe('AddConstructionSiteComponent', () => {
  let component: AddConstructionSiteComponent;
  let fixture: ComponentFixture<AddConstructionSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddConstructionSiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddConstructionSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
