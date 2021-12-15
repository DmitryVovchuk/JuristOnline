import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuristSideMenuComponent } from './jurist-side-menu.component';

describe('JuristSideMenuComponent', () => {
  let component: JuristSideMenuComponent;
  let fixture: ComponentFixture<JuristSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuristSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuristSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
