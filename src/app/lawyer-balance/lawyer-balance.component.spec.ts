import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerBalanceComponent } from './lawyer-balance.component';

describe('LawyerBalanceComponent', () => {
  let component: LawyerBalanceComponent;
  let fixture: ComponentFixture<LawyerBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawyerBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyerBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
