import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmAssignmentRemovalComponent } from './confirm-assignment-removal.component';

describe('ConfirmAssignmentRemovalComponent', () => {
  let component: ConfirmAssignmentRemovalComponent;
  let fixture: ComponentFixture<ConfirmAssignmentRemovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmAssignmentRemovalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmAssignmentRemovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
