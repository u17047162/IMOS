import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMaterialRequestDetailsComponent } from './view-material-request-details.component';

describe('ViewMaterialRequestDetailsComponent', () => {
  let component: ViewMaterialRequestDetailsComponent;
  let fixture: ComponentFixture<ViewMaterialRequestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMaterialRequestDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMaterialRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
