import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerAnketaItemComponent } from './lawyer-anketa-item.component';

describe('LawyerAnketaItemComponent', () => {
  let component: LawyerAnketaItemComponent;
  let fixture: ComponentFixture<LawyerAnketaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawyerAnketaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyerAnketaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
