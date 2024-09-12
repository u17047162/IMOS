import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSaftyChecklistComponent } from './add-safty-checklist.component';

describe('AddSaftyChecklistComponent', () => {
  let component: AddSaftyChecklistComponent;
  let fixture: ComponentFixture<AddSaftyChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSaftyChecklistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSaftyChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
