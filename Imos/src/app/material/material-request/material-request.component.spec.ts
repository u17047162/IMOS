import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialRequestComponent } from './material-request.component';

describe('MaterialRequestComponent', () => {
  let component: MaterialRequestComponent;
  let fixture: ComponentFixture<MaterialRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
