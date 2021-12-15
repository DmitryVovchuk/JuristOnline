import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NomSearchLawyersComponent } from './nom-search-lawyers.component';

describe('NomSearchLawyersComponent', () => {
  let component: NomSearchLawyersComponent;
  let fixture: ComponentFixture<NomSearchLawyersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NomSearchLawyersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NomSearchLawyersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
