import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaftyChecklistCatagoryComponent } from './safty-checklist-catagory.component';

describe('SaftyChecklistCatagoryComponent', () => {
  let component: SaftyChecklistCatagoryComponent;
  let fixture: ComponentFixture<SaftyChecklistCatagoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaftyChecklistCatagoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaftyChecklistCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
