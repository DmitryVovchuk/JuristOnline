import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFaqSearchComponent } from './client-faq-search.component';

describe('ClientFaqSearchComponent', () => {
  let component: ClientFaqSearchComponent;
  let fixture: ComponentFixture<ClientFaqSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientFaqSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientFaqSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
