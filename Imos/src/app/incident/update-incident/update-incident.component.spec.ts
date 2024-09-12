import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateIncidentComponent } from './update-incident.component';

describe('UpdateIncidentComponent', () => {
  let component: UpdateIncidentComponent;
  let fixture: ComponentFixture<UpdateIncidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateIncidentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
