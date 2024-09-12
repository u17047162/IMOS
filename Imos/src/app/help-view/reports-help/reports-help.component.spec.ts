import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsHelpComponent } from './reports-help.component';

describe('ReportsHelpComponent', () => {
  let component: ReportsHelpComponent;
  let fixture: ComponentFixture<ReportsHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
