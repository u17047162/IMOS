import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHelpComponent } from './user-help.component';

describe('UserHelpComponent', () => {
  let component: UserHelpComponent;
  let fixture: ComponentFixture<UserHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
