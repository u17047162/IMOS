import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeliveryNoteComponent } from './add-delivery-note.component';

describe('AddDeliveryNoteComponent', () => {
  let component: AddDeliveryNoteComponent;
  let fixture: ComponentFixture<AddDeliveryNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDeliveryNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDeliveryNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
