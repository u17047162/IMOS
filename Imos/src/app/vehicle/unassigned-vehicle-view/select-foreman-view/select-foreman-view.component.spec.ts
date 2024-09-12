import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectForemanViewComponent } from './select-foreman-view.component';

describe('SelectForemanViewComponent', () => {
  let component: SelectForemanViewComponent;
  let fixture: ComponentFixture<SelectForemanViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectForemanViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectForemanViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
