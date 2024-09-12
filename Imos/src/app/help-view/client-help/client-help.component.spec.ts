import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientHelpComponent } from './client-help.component';

describe('ClientHelpComponent', () => {
  let component: ClientHelpComponent;
  let fixture: ComponentFixture<ClientHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
