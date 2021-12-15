import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NomSearchFaqComponent } from './nom-search-faq.component';

describe('NomSearchFaqComponent', () => {
  let component: NomSearchFaqComponent;
  let fixture: ComponentFixture<NomSearchFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NomSearchFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NomSearchFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
