import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDocSearchComponent } from './client-doc-search.component';

describe('ClientDocSearchComponent', () => {
  let component: ClientDocSearchComponent;
  let fixture: ComponentFixture<ClientDocSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDocSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDocSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
