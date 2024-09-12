import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMaterialRequestComponent } from './update-material-request.component';

describe('UpdateMaterialRequestComponent', () => {
  let component: UpdateMaterialRequestComponent;
  let fixture: ComponentFixture<UpdateMaterialRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMaterialRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMaterialRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
