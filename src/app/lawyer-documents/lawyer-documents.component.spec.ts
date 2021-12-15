import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerDocumentsComponent } from './lawyer-documents.component';

describe('LawyerDocumentsComponent', () => {
  let component: LawyerDocumentsComponent;
  let fixture: ComponentFixture<LawyerDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawyerDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyerDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
