import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMaterialRequestStatusComponent } from './add-material-request-status.component';

describe('AddMaterialRequestStatusComponent', () => {
  let component: AddMaterialRequestStatusComponent;
  let fixture: ComponentFixture<AddMaterialRequestStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMaterialRequestStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMaterialRequestStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
