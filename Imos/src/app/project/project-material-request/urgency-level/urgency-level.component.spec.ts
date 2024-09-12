import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrgencyLevelComponent } from './urgency-level.component';

describe('UrgencyLevelComponent', () => {
  let component: UrgencyLevelComponent;
  let fixture: ComponentFixture<UrgencyLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrgencyLevelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrgencyLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
