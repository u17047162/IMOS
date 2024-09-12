import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentHelpComponent } from './incident-help.component';

describe('IncidentHelpComponent', () => {
  let component: IncidentHelpComponent;
  let fixture: ComponentFixture<IncidentHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidentHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
