import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoMemberMenuComponent } from './no-member-menu.component';

describe('NoMemberMenuComponent', () => {
  let component: NoMemberMenuComponent;
  let fixture: ComponentFixture<NoMemberMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoMemberMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoMemberMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
