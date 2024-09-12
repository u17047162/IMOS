import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialHelpComponent } from './material-help.component';

describe('MaterialHelpComponent', () => {
  let component: MaterialHelpComponent;
  let fixture: ComponentFixture<MaterialHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
