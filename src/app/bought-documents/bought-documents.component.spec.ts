import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoughtDocumentsComponent } from './bought-documents.component';

describe('BoughtDocumentsComponent', () => {
  let component: BoughtDocumentsComponent;
  let fixture: ComponentFixture<BoughtDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoughtDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoughtDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
