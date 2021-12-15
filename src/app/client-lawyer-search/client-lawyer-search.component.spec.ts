import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLawyerSearchComponent } from './client-lawyer-search.component';

describe('ClientLawyerSearchComponent', () => {
  let component: ClientLawyerSearchComponent;
  let fixture: ComponentFixture<ClientLawyerSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientLawyerSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientLawyerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
