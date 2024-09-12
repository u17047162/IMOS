import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUrgencyLevelComponent } from './update-urgency-level.component';

describe('UpdateUrgencyLevelComponent', () => {
  let component: UpdateUrgencyLevelComponent;
  let fixture: ComponentFixture<UpdateUrgencyLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUrgencyLevelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateUrgencyLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
