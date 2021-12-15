import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerAnketaComponent } from './lawyer-anketa.component';

describe('LawyerAnketaComponent', () => {
  let component: LawyerAnketaComponent;
  let fixture: ComponentFixture<LawyerAnketaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawyerAnketaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyerAnketaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
