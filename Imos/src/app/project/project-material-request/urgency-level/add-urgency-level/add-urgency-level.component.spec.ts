import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUrgencyLevelComponent } from './add-urgency-level.component';

describe('AddUrgencyLevelComponent', () => {
  let component: AddUrgencyLevelComponent;
  let fixture: ComponentFixture<AddUrgencyLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUrgencyLevelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUrgencyLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
