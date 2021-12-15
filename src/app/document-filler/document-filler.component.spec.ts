import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentFillerComponent } from './document-filler.component';

describe('DocumentFillerComponent', () => {
  let component: DocumentFillerComponent;
  let fixture: ComponentFixture<DocumentFillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentFillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentFillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
