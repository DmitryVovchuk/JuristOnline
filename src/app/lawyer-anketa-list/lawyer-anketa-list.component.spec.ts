import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerAnketaListComponent } from './lawyer-anketa-list.component';

describe('LawyerAnketaListComponent', () => {
  let component: LawyerAnketaListComponent;
  let fixture: ComponentFixture<LawyerAnketaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawyerAnketaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyerAnketaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
