import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaftyChecklistComponent } from './safty-checklist.component';

describe('SaftyChecklistComponent', () => {
  let component: SaftyChecklistComponent;
  let fixture: ComponentFixture<SaftyChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaftyChecklistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaftyChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
