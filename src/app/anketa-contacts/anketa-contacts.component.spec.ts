import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnketaContactsComponent } from './anketa-contacts.component';

describe('AnketaContactsComponent', () => {
  let component: AnketaContactsComponent;
  let fixture: ComponentFixture<AnketaContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnketaContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnketaContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
