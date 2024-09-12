import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSaftyChecklistCatagoryComponent } from './add-safty-checklist-catagory.component';

describe('AddSaftyChecklistCatagoryComponent', () => {
  let component: AddSaftyChecklistCatagoryComponent;
  let fixture: ComponentFixture<AddSaftyChecklistCatagoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSaftyChecklistCatagoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSaftyChecklistCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
