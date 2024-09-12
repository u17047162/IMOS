import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmMaterialComponent } from './confirm-material.component';

describe('ConfirmMaterialComponent', () => {
  let component: ConfirmMaterialComponent;
  let fixture: ComponentFixture<ConfirmMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
