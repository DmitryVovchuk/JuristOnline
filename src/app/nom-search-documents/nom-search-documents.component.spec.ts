import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NomSearchDocumentsComponent } from './nom-search-documents.component';

describe('NomSearchDocumentsComponent', () => {
  let component: NomSearchDocumentsComponent;
  let fixture: ComponentFixture<NomSearchDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NomSearchDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NomSearchDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
