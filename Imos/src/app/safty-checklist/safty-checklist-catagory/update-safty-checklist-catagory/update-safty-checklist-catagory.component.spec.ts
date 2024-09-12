import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSaftyChecklistCatagoryComponent } from './update-safty-checklist-catagory.component';

describe('UpdateSaftyChecklistCatagoryComponent', () => {
  let component: UpdateSaftyChecklistCatagoryComponent;
  let fixture: ComponentFixture<UpdateSaftyChecklistCatagoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSaftyChecklistCatagoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSaftyChecklistCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
