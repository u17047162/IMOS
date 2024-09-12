import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRequestStatusComponent } from './update-request-status.component';

describe('UpdateRequestStatusComponent', () => {
  let component: UpdateRequestStatusComponent;
  let fixture: ComponentFixture<UpdateRequestStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRequestStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRequestStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
