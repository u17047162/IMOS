import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMaterialRequestStatusComponent } from './update-material-request-status.component';

describe('UpdateMaterialRequestStatusComponent', () => {
  let component: UpdateMaterialRequestStatusComponent;
  let fixture: ComponentFixture<UpdateMaterialRequestStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMaterialRequestStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMaterialRequestStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
