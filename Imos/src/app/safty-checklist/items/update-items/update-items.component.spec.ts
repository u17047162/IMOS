import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateItemsComponent } from './update-items.component';

describe('UpdateItemsComponent', () => {
  let component: UpdateItemsComponent;
  let fixture: ComponentFixture<UpdateItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
