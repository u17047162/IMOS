import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialRequestHelpComponent } from './material-request-help.component';

describe('MaterialRequestHelpComponent', () => {
  let component: MaterialRequestHelpComponent;
  let fixture: ComponentFixture<MaterialRequestHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialRequestHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialRequestHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
