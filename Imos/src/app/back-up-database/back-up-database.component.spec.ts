import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackUpDatabaseComponent } from './back-up-database.component';

describe('BackUpDatabaseComponent', () => {
  let component: BackUpDatabaseComponent;
  let fixture: ComponentFixture<BackUpDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackUpDatabaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackUpDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
