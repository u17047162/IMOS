import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeliveryNoteComponent } from './update-delivery-note.component';

describe('UpdateDeliveryNoteComponent', () => {
  let component: UpdateDeliveryNoteComponent;
  let fixture: ComponentFixture<UpdateDeliveryNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDeliveryNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDeliveryNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
