import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFillFieldComponent } from './client-fill-field.component';

describe('ClientFillFieldComponent', () => {
  let component: ClientFillFieldComponent;
  let fixture: ComponentFixture<ClientFillFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientFillFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientFillFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
