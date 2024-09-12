import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketMaterialComponent } from './basket-material.component';

describe('BasketMaterialComponent', () => {
  let component: BasketMaterialComponent;
  let fixture: ComponentFixture<BasketMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasketMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
