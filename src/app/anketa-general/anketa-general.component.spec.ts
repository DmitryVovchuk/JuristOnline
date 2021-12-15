import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnketaGeneralComponent } from './anketa-general.component';

describe('AnketaGeneralComponent', () => {
  let component: AnketaGeneralComponent;
  let fixture: ComponentFixture<AnketaGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnketaGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnketaGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
