import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialRequestStatusComponent } from './material-request-status.component';

describe('MaterialRequestStatusComponent', () => {
  let component: MaterialRequestStatusComponent;
  let fixture: ComponentFixture<MaterialRequestStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialRequestStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialRequestStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
